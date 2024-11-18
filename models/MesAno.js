// models/MesAno.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const MesAno = sequelize.define('MesAno', {
  idmes_ano: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mes_referencia: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ano_referencia: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'mes_ano', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = MesAno;
