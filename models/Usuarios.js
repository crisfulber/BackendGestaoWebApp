// models/Usuarios.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Usuarios = sequelize.define('Usuarios', {
  idusuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  setorusuario_idsetorusuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'SetorUsuario', 
      key: 'idsetorusuario'
    }
  }
}, {
  tableName: 'usuarios',
  timestamps: false 
});

module.exports = Usuarios;
