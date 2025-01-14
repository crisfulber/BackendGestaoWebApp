// models/CPF.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const CPF = sequelize.define('CPF', {
  idcpf: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'cpf', 
  timestamps: false 
});

module.exports = CPF;
