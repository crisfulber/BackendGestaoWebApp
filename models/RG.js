// models/RG.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const RG = sequelize.define('RG', {
  idrg: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  dtemissao: {
    type: DataTypes.DATE,
    allowNull: false
  },
  orgao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nomepai: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nomemae: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dtnascimento: {
    type: DataTypes.DATE,
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
  tableName: 'rg', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = RG;
