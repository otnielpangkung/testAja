'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pembelian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pembelian.init({
    ItemId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    tanggal: DataTypes.STRING,
    hargaJual: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Pembelian',
  });
  return Pembelian;
};