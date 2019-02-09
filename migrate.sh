source ./.env
USER_ID=$UID docker-compose run flyway -url=jdbc:postgresql://postgresdb:5432/${DB_NAME} -schemas=public -user=${DB_USER} -password=${DB_PASS} migrate
