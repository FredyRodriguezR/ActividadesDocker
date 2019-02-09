source ./.env
if [ $# -eq 1 ]
    then
    USER_ID=$UID docker-compose exec api sequelize-auto -o "/app/$APP_DIR/models" -d test -h postgresdb -u $DB_USER -p 5432 -x $DB_PASS -e postgres -s $DB_SCHEMA -t $1
    echo "Generate Models for tables $1. Check $APP_DIR/models."
    else
    echo "Do you wish to Generate all models for tables in the DB?"
    select yn in "Yes" "No"; do
        case $yn in
            Yes ) USER_ID=$UID docker-compose exec api sequelize-auto -o "/app/$APP_DIR/models" -d test -h postgresdb -u $DB_USER -p 5432 -x $DB_PASS -e postgres -s $DB_SCHEMA ; break;;
            No ) exit;;
        esac
    done
fi