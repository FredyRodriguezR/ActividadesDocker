/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var ActividadModel = sequelize.define('Actividad', {
    id_actividad: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_registro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_limite: {
      type: DataTypes.STRING,
      allowNull: false
    },
    responsable: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    timestamps: false,
    schema: 'app_prueba',
    tableName: 'Actividad'
  });
  return ActividadModel
};
