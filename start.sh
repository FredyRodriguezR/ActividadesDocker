source ./.env
USER_ID=$UID docker-compose down
USER_ID=$UID docker-compose build
USER_ID=$UID docker-compose up -d
until USER_ID=$UID docker-compose exec postgresdb sh -c 'psql -U postgres -c "\c $DB_NAME"' ; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done
USER_ID=$UID docker-compose logs -f flyway