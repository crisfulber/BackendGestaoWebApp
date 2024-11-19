// models/TipoDescAcres.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

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
  tableName: 'tipodescacres', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = TipoDescAcres;
