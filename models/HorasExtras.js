const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const HorasExtras = sequelize.define('HorasExtras', {
  idhorasextras: {
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
  horasextras: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'horasextras', 
  timestamps: false 
});

module.exports = HorasExtras;
