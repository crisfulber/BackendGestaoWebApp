// models/TipoDescAcres.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const TipoDescAcres = sequelize.define('TipoDescAcres', {
  idtipo_desc_acres: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipo_acrescimo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo_desconto: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'tipo_desc_acres', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = TipoDescAcres;
