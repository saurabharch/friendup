CREATE TABLE IF NOT EXISTS `FDBScript` ( `ID` bigint(20) NOT NULL AUTO_INCREMENT, `FileName` varchar(512) NOT NULL, `Script` text NOT NULL, `Error` text DEFAULT NULL, `UpdateTime` bigint(20) NOT NULL, PRIMARY KEY (`ID`) ) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;