const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

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
  dtemissao: {
    type: DataTypes.DATE,
    allowNull: false
  },
  numpis: {
    type: DataTypes.INTEGER,
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
  tableName: 'ctps',
  timestamps: false 
});

module.exports = CTPS;
