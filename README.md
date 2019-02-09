# Gestor de Actividades Dockerizado

Este docker contiene back-end y versionado de Base de datos para Second Circle.  Uso:

En su primera ejecución:
```sh
sudo chmod +x start.sh #permisos de ejecución
sudo chmod +x clean.sh #permisos de ejecución
sudo chmod +x migrate.sh ##permisos de ejecución
```
ejecutar archivos (dependiendo de lo que se necesite):
```sh
./start.sh #Iniciar Contenedor. Inicia app,client base de datos y versionado
./clean.sh #Limpia la base de datos y monta de nuevo la version actual.
./migrate.sh #Migra las versiones de la base de datos que se encuentran en la carpeta sql.
```
* Debe crear la carpeta app en la raiz de este repo y dentro de ella clonar el api app/SecondCircle *

Ver información del api (logs):

```sh
docker-compose logs -f api #Ver logs del api
```
```sh
docker-compose logs -f client #Ver logs del client
```
Detener el contenedor (detiene base de datos tambien):

```sh
docker-compose down #bajar servicios docker
```

# Configuración

En el archivo .env se pueden configurar algunos aspectos del contenedor como:
* APP_DIR : Directorio de la aplicacion a correr con node
* DB_USER : Usuario de la base de datos
* DB_PASS : Password de la base de datos
* DB_NAME : Nombre de la base de datos 
* DN_SCHEMA : Nombre del esquema para autogeneración de modelos

Estos parametros son con los que se va a montar la base de datos en el contenedor, 
deben coincidir con los del api para que la conexion entre estos funcione.

# Generación De modelos

```sh
sh generate_model.sh #Crea los modelos de la base de datos de todas las tablas en el esquema configurado *Sobreescribe modelos*
sh generate_model.sh table1,tble2... #Crea los modelos de la base de datos de las tablas referenciadas
```

