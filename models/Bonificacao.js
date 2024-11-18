// models/Bonificacao.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Bonificacao = sequelize.define('Bonificacao', {
  idbonificacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mes_ano_idmes_ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'MesAno', // Nome da tabela referenciada
      key: 'idmes_ano'
    }
  },
  vlr_apurado: {
    type: DataTypes.FLOAT,
    allowNull: false
  },  
  unidade_idunidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Unidade', // Nome da tabela referenciada
      key: 'idunidade'
    }
  },  
  funcao_empresa_idfuncao_empresa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'FuncaoEmpresa', // Nome da tabela referenciada
      key: 'idfuncao_empresa'
    }
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
  tableName: 'bonificacao', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Bonificacao;
