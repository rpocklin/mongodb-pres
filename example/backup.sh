MONGODUMP_PATH="/usr/bin/mongodump"
MONGO_HOST="localhost" # host for DB instance to backup
MONGO_PORT="27017"     # port for DB instance to backup
MONGO_DATABASE="fvr"   # replace with your database name
BACKUP_TMP_DIR="/tmp"
BACKUP_DUMP_DIR="$BACKUP_TMP_DIR/dump"

$MONGODUMP_PATH -v -u $MONGO_DB_BACKUP_USER -p $MONGO_DB_BACKUP_PASSWORD -h $MONGO_HOST:$MONGO_PORT -o $BACKUP_DUMP_DIR
