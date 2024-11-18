// models/HorasExtras.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const HorasExtras = sequelize.define('HorasExtras', {
  idhoras_extras: {
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
  mes_ano_idmes_ano: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'MesAno', // Nome da tabela referenciada
      key: 'idmes_ano'
    }
  },
  horas_extras: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'horas_extras', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = HorasExtras;
