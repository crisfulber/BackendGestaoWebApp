// models/Empresa.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Empresa = sequelize.define('Empresa', {
  idempresa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco_idendereco: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Endereco', // Nome da tabela referenciada
      key: 'idendereco'
    }
  },
  salario_vigente_idsalario_vigente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'SalarioVigente', // Nome da tabela referenciada
      key: 'idsalario_vigente'
    }
  }
}, {
  tableName: 'empresa', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Empresa;
