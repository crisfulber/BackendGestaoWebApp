const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Contato = sequelize.define('Contato', {
  idcontato: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,    
    validate: {
      isEmail: true
    }
  },
  temWhatsapp: {
    type: DataTypes.TINYINT,
    allowNull: false
  }
}, {
  tableName: 'contato', 
  timestamps: false 
});

module.exports = Contato;
