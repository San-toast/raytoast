"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */ await queryInterface.bulkInsert(`Tickets`, [
      {
        firstName: "Valerie",
        lastName: "Fernandez",
        showtimeId: "3",
        concessions: ["medium coke"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Mary",
        lastName: "Velicaria",
        showtimeId: "2",
        concessions: ["large coke"],
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
