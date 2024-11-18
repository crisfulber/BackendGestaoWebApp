// models/FuncaoRegistro.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const FuncaoRegistro = sequelize.define('FuncaoRegistro', {
  idfuncao_registro: {
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
  tableName: 'funcao_registro', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = FuncaoRegistro;
