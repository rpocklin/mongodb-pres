MONGORESTORE_PATH="/usr/bin/mongorestore"
MONGO_HOST="localhost" #replace with your server ip
MONGO_PORT="27017"
MONGO_DATABASE="fvr" #replace with your database name
RESTORE_TMP_DIR="/tmp"
RESTORE_TMP_SUBDIR="mongodb-restore"
RESTORE_DEST_DIR="/data/db"

rm -rf $RESTORE_TMP_DIR/$BACKUP_DIR_NAME*
rm -rf $RESTORE_TMP_DIR/$RESTORE_TMP_SUBDIR

$MONGORESTORE_PATH -v -u $MONGO_DB_BACKUP_USER -p $MONGO_DB_BACKUP_PASSWORD --drop --authenticationDatabase admin\
 --restoreDbUsersAndRoles --dir $RESTORE_TMP_DIR/$RESTORE_TMP_SUBDIR/$MONGO_DATABASE -d $MONGO_DATABASE