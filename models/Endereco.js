// models/Endereco.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Endereco = sequelize.define('Endereco', {
  idendereco: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rua: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  complemento: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: false
  },
  municipio_idmunicipio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Municipio', // Nome da tabela referenciada
      key: 'idmunicipio'
    }
  }
}, {
  tableName: 'endereco', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Endereco;
