// models/HorasFaltas.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

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
      model: 'Colaborador',
      key: 'idcolaborador'
    }
  },
  periodo_idperiodo: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'Periodo', 
      key: 'idperiodo'
    }
  },
  horasfaltas: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'horasfaltas', 
  timestamps: false 
});

module.exports = HorasFaltas;
