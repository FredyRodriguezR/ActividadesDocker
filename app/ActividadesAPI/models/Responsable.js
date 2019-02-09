/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var ResponsableModel = sequelize.define('Responsable', {
    id_responsable: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    timestamps: false,
    schema: 'app_prueba',
    tableName: 'Responsable'
  });
  return ResponsableModel
};
