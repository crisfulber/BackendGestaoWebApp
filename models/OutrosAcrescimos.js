// models/OutrosAcrescimos.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const OutrosAcrescimos = sequelize.define('OutrosAcrescimos', {
  idoutros_acrescimos: {
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
  tipo_desc_acres_idtipo_desc_acres: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'TipoDescAcres', // Nome da tabela referenciada
      key: 'idtipo_desc_acres'
    }
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  mes_ano_idmes_ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'MesAno', // Nome da tabela referenciada
      key: 'idmes_ano'
    }
  },
  num_parcelas: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'outros_acrescimos', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = OutrosAcrescimos;
