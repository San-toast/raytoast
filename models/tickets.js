"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tickets.belongsTo(models.showtimes, {
        foreignKey: "showtimeId",
      });
      // define association here
    }
  }
  Tickets.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      showtimeId: DataTypes.INTEGER,
      concessions: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: "Tickets",
    }
  );
  return Tickets;
};
