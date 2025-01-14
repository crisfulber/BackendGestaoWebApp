const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Ferias = sequelize.define('Ferias', {
  idferias: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dtsaida: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dias: {
    type: DataTypes.INTEGER,
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
  tableName: 'ferias', 
  timestamps: false 
});

module.exports = Ferias;
