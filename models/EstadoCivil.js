// models/EstadoCivil.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const EstadoCivil = sequelize.define('EstadoCivil', {
  idestadocivil: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  conjuge: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'estadocivil', 
  timestamps: false 
});

module.exports = EstadoCivil;
