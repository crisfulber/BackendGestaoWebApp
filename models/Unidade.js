// models/Unidade.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Unidade = sequelize.define('Unidade', {
  idunidade: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  setores_idsetores: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Setores', // Nome da tabela referenciada
      key: 'idsetores'
    }
  },
  endereco_idendereco: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Endereco', // Nome da tabela referenciada
      key: 'idendereco'
    }
  },
  empresa_idempresa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Empresa', // Nome da tabela referenciada
      key: 'idempresa'
    }
  }
}, {
  tableName: 'unidade', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Unidade;
