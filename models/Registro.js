const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

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
      model: 'Colaborador',
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
      model: 'HistoricoFuncao',
      key: 'idhistoricofuncao'
    }
  },
  funcaoregistro_idfuncaoregistro: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'FuncaoRegistro', 
      key: 'idfuncaoregistro'
    }
  },
  historicosalario_idhistoricosalario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HistoricoSalario', 
      key: 'idhistoricosalario'
    }
  }
}, {
  tableName: 'registro', 
  timestamps: false 
});

module.exports = Registro;
