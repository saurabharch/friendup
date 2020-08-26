/*©lgpl*************************************************************************
*                                                                              *
* This file is part of FRIEND UNIFYING PLATFORM.                               *
* Copyright (c) Friend Software Labs AS. All rights reserved.                  *
*                                                                              *
* Licensed under the Source EULA. Please refer to the copy of the GNU Lesser   *
* General Public License, found in the file license_lgpl.txt.                  *
*                                                                              *
*****************************************************************************©*/

/*

	Auto update definition

*/

#include <time.h>
#include <core/types.h>
#include <core/library.h>

#include "sql_defs.h"
#include "auto_update.h"
#include <system/systembase.h>
#include <dirent.h>

//
// we need structure which will hold name of scripts and their numbers
//

typedef struct LocDBUpdateEntry
{
	int					number;
	char				name[ 512 ];
}LocDBUpdateEntry;

#define NEW_WAY_AUTO_UPDATE

//
//
//

/* sortbydatetime - helper for scandir sorting */

static inline int
SortByDateTime(const struct dirent **a, const struct dirent **b)
{
    int rval;
    struct stat sbuf1, sbuf2;
    char path1[PATH_MAX], path2[PATH_MAX];

    snprintf(path1, PATH_MAX, "sqlupdatescripts/%s", (*a)->d_name);
    snprintf(path2, PATH_MAX, "sqlupdatescripts/%s", (*b)->d_name);

    rval = stat(path1, &sbuf1);
    if (rval) {
        perror("stat");
        return 0;
    }
    rval = stat(path2, &sbuf2);
    if (rval) {
        perror("stat");
        return 0;
    }

    return sbuf1.st_mtime < sbuf2.st_mtime;
}

//
// Read and run sql script
//

int ReadAndRunScript( SQLLibrary *sqllib, char*scriptfname, char **sqlscript )
{
	FILE *fp;
	int error = 0;
	
	if( ( fp = fopen( scriptfname, "rb" ) ) != NULL )
	{
		fseek( fp, 0, SEEK_END );
		long fsize = ftell( fp );
		fseek( fp, 0, SEEK_SET );
		
		char *script;
		if( ( script = FCalloc( fsize+1, sizeof(char) ) ) != NULL )
		{
			int readedbytes = 0;
			if( ( readedbytes = fread( script, fsize, 1, fp ) ) > 0 )
			{
				char *command = script;
				int i;
				
				if( ( *sqlscript = StringDuplicate( script ) ) != NULL )
				{
					
				}

				for( i=1 ; i < fsize ; i++ )
				{
					if( strncmp( &(script[ i ]), "----script----" , 14 ) == 0 )
					{
						char *start = &(script[ i ]);
						char *end = strstr( start, "----script-end----" );
						int len = (end - start)-1;
						i += len;
						
						start += 14;
						*end = 0;
						
						DEBUG("[SystemBase] Running script1 : %s from file: %s on database\n", start, scriptfname );
						
						if( sqllib->QueryWithoutResults( sqllib, start ) != 0 )
						{
							error = 1;
						}

						
						command = &script[ i+1 ];
					}
					else
					{
						if( script[ i ] == ';' )
						{
							script[ i ] = 0;
							DEBUG("[SystemBase] Running script: %s from file: %s on database\n", command, scriptfname ); 
							if( strlen( command) > 10 )
							{
								if( sqllib->QueryWithoutResults( sqllib, command ) != 0 )
								{
									error = 1;
								}
							}
							command = &script[ i+1 ];
						}
					}
				}
				// error: Duplicate column name
				DEBUG("[SystemBase] Running script : %s from file: %s on database\n", command, scriptfname ); 
				if( strlen( command ) > 10 )
				{
					if( sqllib->QueryWithoutResults( sqllib, command ) != 0 )
					{
						error = 1;
					}
				}
			}
			FFree( script );
		}
		fclose( fp );
	}
	return error;
}

/**
* Check and Update FC database
*
* @param psb pointer to SystemBase
*/

void CheckAndUpdateDB( void *psb )
{
	SystemBase *l = (SystemBase *)psb;
	
	Log( FLOG_INFO, "----------------------------------------------------\n");
	Log( FLOG_INFO, "---------Autoupdatedatabase process start-----------\n");
	Log( FLOG_INFO, "----------------------------------------------------\n");
	
	SQLLibrary *sqllib  = l->LibrarySQLGet( l );
	if( sqllib != NULL )
	{
		int startUpdatePosition = 0;
		int orgStartUpdateposition = -1;
		
		char query[ 1024 ];
		snprintf( query, sizeof(query), "SELECT * FROM `FGlobalVariables` WHERE `Key`='DB_VERSION'" );
		
		void *res = sqllib->Query( sqllib, query );
		if( res != NULL )
		{
			char **row;
			while( ( row = sqllib->FetchRow( sqllib, res ) ) ) 
			{
				// Id, Key, Value, Comment, date
			
				DEBUG("[SystemBase] \tFound database entry-> ID '%s' Key '%s', Value '%s', Comment '%s', Date '%s'\n", row[ 0 ], row[ 1 ], row[ 2 ], row[ 3 ], row[ 4 ] );
			
				orgStartUpdateposition = startUpdatePosition = atoi( row[ 2 ] );
			}
			sqllib->FreeResult( sqllib, res );
		}
		
		DEBUG("[SystemBase] CheckAndUpdateDB: %d\n", startUpdatePosition );
		
		DIR *dp = NULL;
		struct dirent *dptr;
		int numberOfFiles = 0;
		
		DEBUG("[SystemBase] UpdateDB found directory\n");
		
		if( ( dp = opendir( "sqlupdatescripts" ) ) != NULL )
		{
			while( ( dptr = readdir( dp ) ) != NULL )
			{
				if( strcmp( dptr->d_name, "." ) == 0 || strcmp( dptr->d_name, ".." ) == 0 )
				{
					continue;
				}
				
				numberOfFiles++;
			}
			closedir( dp );
		}
		
		LocDBUpdateEntry *dbentries;
		
		if( ( dbentries = FCalloc( numberOfFiles, sizeof(LocDBUpdateEntry) ) ) != NULL )
		{
			int position = 0;
			
			if( ( dp = opendir( "sqlupdatescripts" ) ) != NULL )
			{
				DEBUG("[SystemBase] UpdateDB found directory 1\n");
				while( ( dptr = readdir( dp ) ) != NULL )
				{
					char number[ 512 ];
					unsigned int i;
				
					if( strcmp( dptr->d_name, "." ) == 0 || strcmp( dptr->d_name, ".." ) == 0 )
					{
						continue;
					}
				
					DEBUG("[SystemBase] get number from name\n");
					// we must extract number from filename
					strcpy( number, dptr->d_name );
					for( i=0 ; i < strlen( number ) ; i++ )
					{
						if( number[ i ] == '_' )
						{
							number[ i ] = 0;
							break;
						}
					}
					
					DEBUG("[SystemBase] number found: '%s'\n", number );
					
					dbentries[ position ].number = atoi( number );
					
					// we must get all entries
#ifdef NEW_WAY_AUTO_UPDATE
					DEBUG("[SystemBase] Found script with number %d, script added: %s\n", dbentries[ position ].number, dptr->d_name );
					strcpy( dbentries[ position ].name, dptr->d_name );
					position++;
#else
					if( dbentries[ position ].number > startUpdatePosition )
					{
						DEBUG("[SystemBase] Found script with number %d, script added: %s\n", dbentries[ position ].number, dptr->d_name );
						strcpy( dbentries[ position ].name, dptr->d_name );
						position++;
					}
					else
					{
						DEBUG("[SystemBase] !!!! dbentries[ position ].number <= startUpdatePosition\n");
					}
#endif
				}
				closedir( dp );
			}
			
			DEBUG("[SystemBase] Directories parsed startUpdatePosition: %d position %d\n", startUpdatePosition, position );
			
			// we must run script which holds changes
#ifdef NEW_WAY_AUTO_UPDATE
			startUpdatePosition = 0;
#else
			startUpdatePosition++;
#endif
			char *lastSQLname = NULL;
			int error = 0;
			// now FC will update DB script after script
			int i;
			for( i=0 ; i < position ; i++ )
			{
				int j;
				for( j=0; j < position ; j++ )
				{
					DEBUG("[SystemBase] Checking numbers, start: %d actual: %d\n", startUpdatePosition, dbentries[j].number );
					
					if( startUpdatePosition == dbentries[j].number )
					{
						FILE *fp;
						char scriptfname[ 712 ];
						char where[ 512 ];
						snprintf( scriptfname, sizeof( scriptfname ), "sqlupdatescripts/%s", dbentries[j].name );
						DEBUG("[SystemBase] Found script with ID %d\n", startUpdatePosition );
						
						snprintf( where, sizeof(where), "FileName='%s'", scriptfname );
	
						int entries;
						// reading FC connections
						DBUpdateEntry *dbe = sqllib->Load( sqllib, DBUpdateEntryDesc, where, &entries );
						
						char *script = NULL;
#ifdef NEW_WAY_AUTO_UPDATE
						if( dbe != NULL )
						{
							if( dbe->dbue_Error != NULL && strlen( dbe->dbue_Error ) > 0 )
							{
								error = ReadAndRunScript( sqllib, scriptfname, &script );	// rerun script
							}
							else
							{
								error = 0;	// no error
							}
						}
						else
						{
							error = ReadAndRunScript( sqllib, scriptfname, &script );
						}
#else
						error = ReadAndRunScript( sqllib, scriptfname, &script );
#endif
						if( error == 0 )
						{
							lastSQLname = dbentries[j].name;
						}

						if( dbe != NULL )
						{
							if( error == 1 )
							{
								if( dbe->dbue_Error != NULL ) FFree( dbe->dbue_Error );
								dbe->dbue_Error = StringDuplicate( sqllib->l_LastError );
							}
							else
							{
								if( dbe->dbue_Error != NULL ){ FFree( dbe->dbue_Error ); dbe->dbue_Error = NULL; }
							}
							dbe->dbue_UpdateTime = time( NULL );
							sqllib->Update( sqllib, DBUpdateEntryDesc, dbe );
						}
						else
						{
							DEBUG("Create new entry in DB\n");
							dbe = FCalloc( 1, sizeof( DBUpdateEntry ) );
							if( error == 1 )
							{
								dbe->dbue_Error = StringDuplicate( sqllib->l_LastError );
							}
							dbe->dbue_UpdateTime = time( NULL );
							dbe->dbue_FileName = StringDuplicate( scriptfname );
							dbe->dbue_Script = StringDuplicate( script );
							
							sqllib->Save( sqllib, DBUpdateEntryDesc, dbe );
						}
						
						if( dbe != NULL )
						{
							if( dbe->dbue_Error != NULL ) FFree( dbe->dbue_Error );
							if( dbe->dbue_FileName != NULL ) FFree( dbe->dbue_FileName );
							if( dbe->dbue_Script != NULL ) FFree( dbe->dbue_Script );
							FFree( dbe );
						}
						
						if( script != NULL )
						{
							FFree( script );
						}
						break;
					}
					
					if( error == 1 )
					{
						break;
					}
				}
				
				if( error == 1 )
				{
					break;
				}
				startUpdatePosition++;
			}
			
			// we must update which update was last
			startUpdatePosition--;
			
			if( orgStartUpdateposition != startUpdatePosition && lastSQLname != NULL )
			{
				DEBUG("[SystemBase] Last script will be updated in DB\n");
				snprintf( query, sizeof(query), "UPDATE `FGlobalVariables` SET `Value`='%d', `Date`='%lu', `Comment`='%s' WHERE `Key`='DB_VERSION'", startUpdatePosition, time(NULL), lastSQLname );
				sqllib->QueryWithoutResults( sqllib, query );
			}
			FFree( dbentries );
		}
		
		l->LibrarySQLDrop( l, sqllib );
	}
	
	Log( FLOG_INFO, "----------------------------------------------------\n");
	Log( FLOG_INFO, "---------Autoupdatedatabase process END-------------\n");
	Log( FLOG_INFO, "----------------------------------------------------\n");
}
