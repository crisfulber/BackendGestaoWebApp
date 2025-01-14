// models/HistoricoSalario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const HistoricoSalario = sequelize.define('HistoricoSalario', {
  idhistoricosalario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dtalteracao: {
    type: DataTypes.DATE,
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
      model: 'Colaborador', 
      key: 'idcolaborador'
    }
  }
}, {
  tableName: 'historicosalario', 
  timestamps: false 
});

module.exports = HistoricoSalario;
