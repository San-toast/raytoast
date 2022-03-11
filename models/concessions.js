'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Concessions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Concessions.init({
    Name: DataTypes.STRING,
    Type: DataTypes.STRING,
    Size: DataTypes.STRING,
    Price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Concessions',
  });
  return Concessions;
};