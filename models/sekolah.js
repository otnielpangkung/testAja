'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sekolah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sekolah.hasMany(models.Murid, {
        foreignKey: 'SekolahId'
      })
      Sekolah.hasMany(models.Kelas)
      // define association here
    }
  };
  Sekolah.init({
    namaSekolah: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sekolah',
  });
  return Sekolah;
};