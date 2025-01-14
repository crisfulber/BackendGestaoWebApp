const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

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
      model: 'Colaborador', 
      key: 'idcolaborador'
    }
  },
  tipodescacres_idtipodescacres: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'TipoDescAcres', 
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
      model: 'Periodo', 
      key: 'idperiodo'
    }
  },
  numparcelas: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'outrosacrescimos', 
  timestamps: false 
});

module.exports = OutrosAcrescimos;
