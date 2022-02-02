'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Murid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Murid.belongsTo(models.Kelas, {
        foreignKey: 'KelasId'
      })
      Murid.belongsTo(models.Sekolah, {
        foreignKey: 'SekolahId'
      })
      // define association here
    }
  };
  Murid.init({
    namaMurid: DataTypes.STRING,
    SekolahId: DataTypes.INTEGER,
    KelasId: DataTypes.INTEGER,
    tanggalLahir: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Murid',
  });
  return Murid;
};