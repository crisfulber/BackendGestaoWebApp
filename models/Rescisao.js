// models/Rescisao.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Rescisao = sequelize.define('Rescisao', {
  idrescisao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  colaborador_idcolaborador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Colaborador', // Nome da tabela referenciada
      key: 'idcolaborador'
    }
  },
  dtavisoprevio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dtultimodia: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'rescisao', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Rescisao;
