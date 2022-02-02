'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Kelas.hasMany(models.Murid, {
        foreignKey: 'KelasId'
      })
      Kelas.belongsTo(models.Sekolah)
      // define association here
    }
  };
  Kelas.init({
    namaKelas: DataTypes.STRING,
    SekolahId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kelas',
  });
  return Kelas;
};