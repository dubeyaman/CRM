'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ticketPriority: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 4
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "OPEN"
      },
      reporter: {
        type: Sequelize.STRING
      },
      assignee: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};