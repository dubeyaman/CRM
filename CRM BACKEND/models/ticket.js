'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey:{
          name: 'userId'
        }
      })
    }
  }
  Ticket.init({
    title: DataTypes.STRING,
    ticketPriority: DataTypes.INTEGER,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    reporter: DataTypes.STRING,
    assignee: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};