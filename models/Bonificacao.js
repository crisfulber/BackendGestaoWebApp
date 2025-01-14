// models/Bonificacao.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Bonificacao = sequelize.define('Bonificacao', {
  idbonificacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  periodo_idperiodo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Periodo',
      key: 'idperiodo'
    }
  },
  vlrapurado: {
    type: DataTypes.FLOAT,
    allowNull: false
  },  
  unidade_idunidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Unidade',
      key: 'idunidade'
    }
  },  
  funcaoempresa_idfuncaoempresa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'FuncaoEmpresa', 
      key: 'idfuncaoempresa'
    }
  },
  colaborador_idcolaborador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Colaborador', 
      key: 'idcolaborador'
    }
  }
}, {
  tableName: 'bonificacao', 
  timestamps: false 
});

module.exports = Bonificacao;
