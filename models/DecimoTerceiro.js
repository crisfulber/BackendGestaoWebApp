// models/DecimoTerceiro.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const DecimoTerceiro = sequelize.define('DecimoTerceiro', {
  iddecimoterceiro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dtparcela1: {
    type: DataTypes.DATE,
    allowNull: false
  },
  vlrparcela1: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  dtparcela2: {
    type: DataTypes.DATE,
    allowNull: false
  },
  vlrparcela2: {
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
  tableName: 'decimoterceiro', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = DecimoTerceiro;
