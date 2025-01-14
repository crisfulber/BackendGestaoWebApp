const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
      model: 'Colaborador', 
      key: 'idcolaborador'
    }
  }
}, {
  tableName: 'decimoterceiro', 
  timestamps: false 
});

module.exports = DecimoTerceiro;
