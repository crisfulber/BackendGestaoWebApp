// models/FuncaoRegistro.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const FuncaoRegistro = sequelize.define('FuncaoRegistro', {
  idfuncaoregistro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cbo: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'funcaoregistro', 
  timestamps: false 
});

module.exports = FuncaoRegistro;
