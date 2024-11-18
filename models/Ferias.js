// models/Ferias.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Ferias = sequelize.define('Ferias', {
  idferias: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dt_saida: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dias: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  colaborador_idcolaborador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Colaborador', // Nome da tabela referenciada
      key: 'idcolaborador'
    }
  }
}, {
  tableName: 'ferias', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Ferias;
