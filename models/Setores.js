// models/Setores.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Setores = sequelize.define('Setores', {
  idsetores: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'setores', // Nome exato da tabela no banco de dados
  timestamps: false, // Evita os campos createdAt e updatedAt
});

module.exports = Setores;