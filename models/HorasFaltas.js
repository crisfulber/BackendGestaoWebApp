// models/HorasFaltas.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const HorasFaltas = sequelize.define('HorasFaltas', {
  idhorasfaltas: {
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
  periodo_idperiodo: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'Periodo', // Nome da tabela referenciada
      key: 'idperiodo'
    }
  },
  horasfaltas: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'horasfaltas', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = HorasFaltas;
