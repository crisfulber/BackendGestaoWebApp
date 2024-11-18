// models/Usuarios.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

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
  setor_usuario_idsetor_usuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'SetorUsuario', // Nome da tabela referenciada
      key: 'idsetor_usuario'
    }
  }
}, {
  tableName: 'usuarios', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Usuarios;
