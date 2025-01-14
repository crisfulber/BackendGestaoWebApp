const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Escala = sequelize.define('Escala', {
  idescala: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  horaentrada: {
    type: DataTypes.TIME,
    allowNull: false
  },
  horasaiintervalo: {
    type: DataTypes.TIME,
    allowNull: false
  },
  horavoltaintervalo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  horasaida: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'escala', 
  timestamps: false,
  hooks: {
    beforeSave: (escala) => {
      const fieldsToUpper = ['nome', 'descricao'];

      fieldsToUpper.forEach((field) => {
        if (typeof escala[field] === 'string') {
          escala[field] = escala[field].toUpperCase();
        }
      });
    },
  },
});

module.exports = Escala;
