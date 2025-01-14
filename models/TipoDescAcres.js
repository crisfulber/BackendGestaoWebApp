// models/TipoDescAcres.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoDescAcres = sequelize.define('TipoDescAcres', {
  idtipodescacres: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipoacrescimo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipodesconto: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'tipodescacres', 
  timestamps: false 
});

module.exports = TipoDescAcres;
