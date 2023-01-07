'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
        
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userType: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "CUSTOMER",
      },
      userStatus: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "APROVED",
      },
      ticketsCreated : {
        type : Sequelize.STRING,
        ref : "Ticket"
    },
    ticketsAssigned : {
        type : Sequelize.STRING,
        ref : "Ticket"
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
    await queryInterface.dropTable('users');
  }
};