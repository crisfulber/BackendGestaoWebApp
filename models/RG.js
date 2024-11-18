// models/RG.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const RG = sequelize.define('RG', {
  idrg: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  num_rg: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  dt_emissao_rg: {
    type: DataTypes.DATE,
    allowNull: false
  },
  orgao_rg: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nome_pai: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nome_mae: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dt_nascimento: {
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
