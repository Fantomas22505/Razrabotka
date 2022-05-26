'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PC extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PC.init({
    CPU: DataTypes.STRING,
    RAM: DataTypes.INTEGER,
    OfficeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PC',
  });
  return PC;
};