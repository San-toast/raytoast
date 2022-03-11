"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Concessions", [
      {
        Name: "Coke",
        Type: "drink",
        Size: "small",
        Price: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Coke",
        Type: "drink",
        Size: "medium",
        Price: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Coke",
        Type: "drink",
        Size: "large",
        Price: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Diet Coke",
        Type: "drink",
        Size: "small",
        Price: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Diet Coke",
        Type: "drink",
        Size: "medium",
        Price: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Diet Coke",
        Type: "drink",
        Size: "large",
        Price: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
