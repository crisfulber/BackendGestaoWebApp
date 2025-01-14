const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Adiantamento = sequelize.define('Adiantamento', {
  idadiantamento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true
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
  tableName: 'adiantamento', 
  timestamps: false
});

module.exports = Adiantamento;
