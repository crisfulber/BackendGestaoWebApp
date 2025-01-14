// models/RG.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
      model: 'Estado',
      key: 'idestado'
    }
  }
}, {
  tableName: 'rg',
  timestamps: false,
  hooks: {
    beforeSave: (rg) => {
      const fieldsToUpper = ['orgao', 'nomepai', 'nomemae'];

      fieldsToUpper.forEach((field) => {
        if (typeof rg[field] === 'string') {
          rg[field] = rg[field].toUpperCase();
        }
      });
    },
  },
});

module.exports = RG;
