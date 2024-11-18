// models/CTPS.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const CTPS = sequelize.define('CTPS', {
  idctps: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  serie: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_emissao: {
    type: DataTypes.DATE,
    allowNull: false
  },
  num_pis: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estado_idestado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Estado', // Nome da tabela referenciada
      key: 'idestado'
    }
  }
}, {
  tableName: 'ctps', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = CTPS;
