// models/Estado.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Estado = sequelize.define('Estado', {
  idestado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sigla: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'estado', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Estado;
