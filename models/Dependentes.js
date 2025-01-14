const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Dependentes = sequelize.define('Dependentes', {
  iddependentes: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dtnascimento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cpf_idcpf: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'CPF', 
      key: 'idcpf'
    }
  }
}, {
  tableName: 'dependentes', 
  timestamps: false 
});

module.exports = Dependentes;
