const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Rescisao = sequelize.define('Rescisao', {
  idrescisao: {
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
  dtavisoprevio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dtultimodia: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'rescisao', 
  timestamps: false 
});

module.exports = Rescisao;
