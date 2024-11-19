// models/Dependentes.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Dependentes = sequelize.define('Dependentes', {
  iddependentes: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dtnascimento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cpf_idcpf: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'CPF', // Nome da tabela referenciada
      key: 'idcpf'
    }
  }
}, {
  tableName: 'dependentes', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Dependentes;
