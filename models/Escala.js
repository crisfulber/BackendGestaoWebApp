// models/Escala.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Escala = sequelize.define('Escala', {
  idescala: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hora_entrada: {
    type: DataTypes.TIME,
    allowNull: false
  },
  hora_sai_intervalo: {
    type: DataTypes.TIME,
    allowNull: false
  },
  hora_volta_intervalo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hora_saida: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'escala', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Escala;
