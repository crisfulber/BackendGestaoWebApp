const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Escolaridade = sequelize.define('Escolaridade', {
  idescolaridade: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'escolaridade', 
  timestamps: false 
});

module.exports = Escolaridade;
