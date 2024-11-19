// models/EstadoCivil.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const EstadoCivil = sequelize.define('EstadoCivil', {
  idestadocivil: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  conjuge: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'estadocivil', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = EstadoCivil;
