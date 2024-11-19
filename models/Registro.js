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
  dtregistro: {
    type: DataTypes.DATE,
    allowNull: false
  },
  historicofuncao_idhistoricofuncao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HistoricoFuncao', // Nome da tabela referenciada
      key: 'idhistoricofuncao'
    }
  },
  funcaoregistro_idfuncaoregistro: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'FuncaoRegistro', // Nome da tabela referenciada
      key: 'idfuncaoregistro'
    }
  },
  historicosalario_idhistoricosalario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HistoricoSalario', // Nome da tabela referenciada
      key: 'idhistoricosalario'
    }
  }
}, {
  tableName: 'registro', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Registro;
