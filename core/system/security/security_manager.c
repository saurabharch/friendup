/*©mit**************************************************************************
*                                                                              *
* This file is part of FRIEND UNIFYING PLATFORM.                               *
* Copyright (c) Friend Software Labs AS. All rights reserved.                  *
*                                                                              *
* Licensed under the Source EULA. Please refer to the copy of the MIT License, *
* found in the file license_mit.txt.                                           *
*                                                                              *
*****************************************************************************©*/
/** @file
 * 
 *  Security Manager
 *
 * file contain definitions related to RoleManager
 *
 *  @author PS (Pawel Stefanski)
 *  @date created 12/03/2020
 */

#include "security_manager.h"
#include <system/systembase.h>
#include <util/hashmap_long.h>
#include <network/locfile.h>
#include <util/base64.h>

/**
 * Create SecurityManager
 *
 * @param sb pointer to SystemBase
 * @return SecurityManager structure
 */
SecurityManager *SecurityManagerNew( void *sb )
{
	SecurityManager *sm;
	
	if( ( sm = FCalloc( 1, sizeof( SecurityManager ) ) ) != NULL )
	{
		Props *prop = NULL;
		
		sm->sm_SB = sb;
		sm->sm_SessionTimeout = 60*60;	// 60 seconds, 60 minutes = 1h
		
		sm->sm_BadSessionLoginHM = HashmapLongNew();
		
		pthread_mutex_init( &(sm->sm_Mutex), NULL );
		
		SystemBase *lsb = (SystemBase *)sb;
		PropertiesInterface *plib = &(lsb->sl_PropertiesInterface);
		char *ptr = getenv("FRIEND_HOME");
		char *path = FCalloc( 1024, sizeof( char ) );
		
		if( ptr != NULL )
		{
			snprintf( path, 1024, "%scfg/cfg.ini", ptr );
		}
		
		prop = plib->Open( path );
		FFree( path );
		
		if( prop != NULL)
		{
			// key login
			
			sm->sm_PublicKeyLoginKey = StringDuplicate( plib->ReadStringNCS( prop, "core:PublicLoginKey", NULL ) );
			sm->sm_PrivateKeyLoginKey = StringDuplicate( plib->ReadStringNCS( prop, "core:PrivateLoginKey", NULL ) );
			sm->sm_UseKeyLogin = plib->ReadIntNCS( prop, "core:UseLoginKey", 0 );
			
			plib->Close( prop );
		}
		
		if( sm->sm_UseKeyLogin == TRUE && sm->sm_PublicKeyLoginKey != NULL && sm->sm_PrivateKeyLoginKey != NULL )
		{
			LocFile *lf = LocFileNew( sm->sm_PublicKeyLoginKey, 0 );
			if( lf != NULL )
			{
 				sm->sm_PublicLoginrRSA = RSA_new();
				sm->sm_PublicMemBIO = BIO_new_mem_buf( lf->lf_Buffer, lf->lf_FileSize );
				sm->sm_PublicLoginrRSA = PEM_read_bio_RSA_PUBKEY( sm->sm_PublicMemBIO, &(sm->sm_PublicLoginrRSA),NULL, NULL );
				LocFileDelete( lf );
			}
			
			lf = LocFileNew( sm->sm_PrivateKeyLoginKey, 0 );
			if( lf != NULL )
			{
				sm->sm_PrivateLoginrRSA = RSA_new();
				sm->sm_PrivateMemBIO = BIO_new_mem_buf( lf->lf_Buffer, lf->lf_FileSize );
				sm->sm_PrivateLoginrRSA = PEM_read_bio_RSAPrivateKey( sm->sm_PrivateMemBIO, &(sm->sm_PrivateLoginrRSA),NULL, NULL );
				LocFileDelete( lf );
			}
		}
		
		return sm;
	}
	return NULL;
}

/**
 * Delete SecurityManager
 *
 * @param sm pointer to SecurityManager structure which will be deleted
 */
void SecurityManagerDelete( SecurityManager *sm )
{
	DEBUG("[SecurityManagerDelete] security manager ptr: %p\n", sm );
	if( sm != NULL )
	{
		HashmapLongFree( sm->sm_BadSessionLoginHM );
		
		pthread_mutex_destroy( &(sm->sm_Mutex) );
		
		// private
		if( sm->sm_PrivateKeyLoginKey != NULL )
		{
			FFree( sm->sm_PrivateKeyLoginKey );
		}
		if( sm->sm_PrivateMemBIO != NULL )
		{
			BIO_free( sm->sm_PrivateMemBIO );
		}
		if( sm->sm_PrivateLoginrRSA != NULL )
		{
			RSA_free( sm->sm_PrivateLoginrRSA );
		}
		
		// public
		if( sm->sm_PublicKeyLoginKey != NULL )
		{
			FFree( sm->sm_PublicKeyLoginKey );
		}
		if( sm->sm_PublicMemBIO != NULL )
		{
			BIO_free( sm->sm_PublicMemBIO );
		}
		if( sm->sm_PublicLoginrRSA != NULL )
		{
			RSA_free( sm->sm_PublicLoginrRSA );
		}
		
		FFree( sm );
	}
}

/**
 * Security check for sessions
 * 
 * Function put into hashmap sessions which timeout
 *
 * @param sm pointer to SecurityManager structure
 * @param request Http request
 */

void SecurityManagerCheckSession( SecurityManager *sm, Http *request )
{
	HashmapElement *sesreq = GetHEReq( request, "sessionid" );
	if( sesreq != NULL )
	{
		DEBUG("sessionid found!\n");
		if( sesreq->hme_Data != NULL )
		{
			DEBUG("sessionid value found!\n");
			// getting last call for session
			HashmapElementLong *hel = NULL;
			
			if( FRIEND_MUTEX_LOCK( &(sm->sm_Mutex) ) == 0 )
			{
				hel = HashmapLongGet( sm->sm_BadSessionLoginHM, sesreq->hme_Data );
				FRIEND_MUTEX_UNLOCK( &(sm->sm_Mutex) );
			}
			
			if( hel != NULL )
			{
				time_t timeNow = time( NULL );
				// if last call bad call for this session was called one hour ago (60 second * 60 minutes)
				if( (timeNow - hel->hel_LastUpdate ) > sm->sm_SessionTimeout )
				{
					// so remove this session from list
					if( FRIEND_MUTEX_LOCK( &(sm->sm_Mutex) ) == 0 )
					{
						HashmapLongRemove( sm->sm_BadSessionLoginHM, sesreq->hme_Data );
						FRIEND_MUTEX_UNLOCK( &(sm->sm_Mutex) );
					}
				}
				else
				{
					hel->hel_LastUpdate = timeNow;
					hel->hel_Data++;
					
					// count delay value
					float delValue = ((float)hel->hel_Data) * 1.1f;
					
					DEBUG("SECURITY WARNING! Same call was made %ld times, delay will be set to: %f\n", hel->hel_Data, delValue );
					
					if( hel->hel_Data > 5 )
					{
						int slValue = ((int)delValue)-4;
						DEBUG("Sleep value: %d\n", slValue );
						sleep( slValue );
					}
				}
			}
			else
			{
				DEBUG("create new entry: %s!\n", (char *)sesreq->hme_Data );
				if( FRIEND_MUTEX_LOCK( &(sm->sm_Mutex) ) == 0 )
				{
					HashmapLongPut( sm->sm_BadSessionLoginHM, StringDuplicate( sesreq->hme_Data ), 1 );
					FRIEND_MUTEX_UNLOCK( &(sm->sm_Mutex) );
				}
			}
		}
	}
}

/**
 * Remove old sessions
 * 
 * Function delete all sessions which are pointed by SecurityManagerCheckSession "to be removed"
 *
 * @param sm pointer to SecurityManager structure
 */

void SecurityManagerRemoteOldBadSessionCalls( SecurityManager *sm )
{
	if( FRIEND_MUTEX_LOCK( &(sm->sm_Mutex) ) == 0 )
	{
		// if last call bad call for this session was called one hour ago (60 second * 60 minutes)
		HashmapDeleteOldEntries( sm->sm_BadSessionLoginHM, sm->sm_SessionTimeout );
		
		FRIEND_MUTEX_UNLOCK( &(sm->sm_Mutex) );
	}
}

/**
 * Encode data by key
 * 
 * Function decode data by login key
 *
 * @param sm pointer to SecurityManager structure
 * @param data data which will be decoded
 * @param len length of data
 * @param dstLen pointer to integer where result size will be stored
 * @return pointer to allocated memory where result will be stored
 */
char *SecurityManagerEncodeDataByKey( SecurityManager *sm, char *data, int len, int *dstLen )
{
	int cipherSize = RSA_size( sm->sm_PublicLoginrRSA)+1;
	char *cipher = FMalloc( cipherSize+16 );

	// Encrypting using loaded public key
	cipherSize = RSA_public_encrypt( len, (unsigned char *)data, 
                                       (unsigned char *)cipher, sm->sm_PublicLoginrRSA, RSA_PKCS1_OAEP_PADDING);
	//char *resp = Base64Encode( (unsigned char *)cipher, cipherSize, dstLen );
	*dstLen = cipherSize;
	return cipher;
}

/**
 * Decode data by key
 * 
 * Function decode data by login key
 *
 * @param sm pointer to SecurityManager structure
 * @param data data which will be decoded
 * @param len length of data
 * @param dstLen pointer to integer where result size will be stored
 * @return pointer to allocated memory where result will be stored
 */
char *SecurityManagerDecodeDataByKey( SecurityManager *sm, char *data, int len, int *dstLen )
{
	char *back = FMalloc( len * 4 );
	int cipherSize = RSA_private_decrypt( len,(unsigned char *)data, 
		(unsigned char *)back, sm->sm_PrivateLoginrRSA, RSA_PKCS1_OAEP_PADDING );
	back[ cipherSize ]=0;
	*dstLen = cipherSize;
	return back;
}

