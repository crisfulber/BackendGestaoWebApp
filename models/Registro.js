// models/Registro.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Registro = sequelize.define('Registro', {
  idregistro: {
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
  dt_registro: {
    type: DataTypes.DATE,
    allowNull: false
  },
  historico_funcao_idhistorico_funcao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HistoricoFuncao', // Nome da tabela referenciada
      key: 'idhistorico_funcao'
    }
  },
  funcao_registro_idfuncao_registro: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'FuncaoRegistro', // Nome da tabela referenciada
      key: 'idfuncao_registro'
    }
  },
  historico_salario_idhistorico_salario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HistoricoSalario', // Nome da tabela referenciada
      key: 'idhistorico_salario'
    }
  }
}, {
  tableName: 'registro', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Registro;
