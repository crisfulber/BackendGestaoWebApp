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
  horaentrada: {
    type: DataTypes.TIME,
    allowNull: false
  },
  horasaiintervalo: {
    type: DataTypes.TIME,
    allowNull: false
  },
  horavoltaintervalo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  horasaida: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'escala', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Escala;
