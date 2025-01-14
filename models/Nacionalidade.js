// models/Nacionalidade.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Nacionalidade = sequelize.define('Nacionalidade', {
  idnacionalidade: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'nacionalidade', 
  timestamps: false 
});

module.exports = Nacionalidade;
