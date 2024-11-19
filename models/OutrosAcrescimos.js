// models/OutrosAcrescimos.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const OutrosAcrescimos = sequelize.define('OutrosAcrescimos', {
  idoutrosacrescimos: {
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
  tipodescacres_idtipodescacres: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'TipoDescAcres', // Nome da tabela referenciada
      key: 'idtipodescacres'
    }
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  periodo_idperiodo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Periodo', // Nome da tabela referenciada
      key: 'idperiodo'
    }
  },
  numparcelas: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'outrosacrescimos', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = OutrosAcrescimos;
