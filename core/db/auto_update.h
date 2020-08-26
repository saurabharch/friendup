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

#ifndef __DB_AUTO_UPDATE_H_
#define __DB_AUTO_UPDATE_H_

#include <time.h>
#include <core/types.h>
#include <core/library.h>

#include "sql_defs.h"

//
//
//

typedef struct DBUpdateEntry
{
	FQUAD			dbue_ID;			// ID
	char			*dbue_FileName;		// script file name
	char 			*dbue_Script;		// script content
	char			*dbue_Error;		// if NULL then there was no error
	time_t			dbue_UpdateTime;	// timestamp
	MinNode			node;
}DBUpdateEntry;

/*
 CREATE TABLE IF NOT EXISTS `FDBScript` ( 
	`ID` bigint(20) NOT NULL AUTO_INCREMENT,
	`FileName` varchar(512) NOT NULL,
	`Script` text NOT NULL,
	`Error` text DEFAULT NULL,
	`UpdateTime` bigint(20) NOT NULL,
	PRIMARY KEY (`ID`)
 ) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
*/

//
//
//

static FULONG DBUpdateEntryDesc[] = { 
	SQLT_TABNAME, (FULONG)"FDBScript",       
	SQLT_STRUCTSIZE, sizeof( struct DBUpdateEntry ), 
	SQLT_IDINT,   (FULONG)"ID",        offsetof( struct DBUpdateEntry, dbue_ID ), 
	SQLT_STR,     (FULONG)"FileName",  offsetof( struct DBUpdateEntry, dbue_FileName ),
	SQLT_STR,     (FULONG)"Script",    offsetof( struct DBUpdateEntry, dbue_Script ),
	SQLT_STR,     (FULONG)"Error",     offsetof( struct DBUpdateEntry, dbue_Error ),
	SQLT_INT,     (FULONG)"UpdateTime",offsetof( struct DBUpdateEntry, dbue_UpdateTime ),
	SQLT_NODE,    (FULONG)"node",      offsetof( struct DBUpdateEntry, node ),
	SQLT_END 
};

//
//
//

DBUpdateEntry *DBUpdateEntryNew();

//
//
//

void DBUpdateEntryDelete( DBUpdateEntry *dbue );

//
//
//

void CheckAndUpdateDB( void *psb );

#endif	// __DB_AUTO_UPDATE_H_
