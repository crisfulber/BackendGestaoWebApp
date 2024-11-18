// models/EstadoCivil.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const EstadoCivil = sequelize.define('EstadoCivil', {
  idestado_civil: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  conjuge: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'estado_civil', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = EstadoCivil;
