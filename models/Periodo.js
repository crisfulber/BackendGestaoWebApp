// models/Periodo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Periodo = sequelize.define('Periodo', {
  idperiodo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mesreferencia: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  anoreferencia: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'periodo', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Periodo;
