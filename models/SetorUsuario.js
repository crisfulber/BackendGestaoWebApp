// models/SetorUsuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const SetorUsuario = sequelize.define('SetorUsuario', {
  idsetorusuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'setorusuario', 
  timestamps: false 
});

module.exports = SetorUsuario;
