// models/SalarioVigente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const SalarioVigente = sequelize.define('SalarioVigente', {
  idsalariovigente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dtinicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dtfim: {
    type: DataTypes.DATE,
    allowNull: true
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'salariovigente', // Nome da tabela no banco de dados
  timestamps: false, // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
  hooks: {
    beforeSave: (salariovigente) => {
      if (typeof salariovigente.nome === 'string') {
        console.log(`Transformando nome para maiúsculas: ${salariovigente.nome}`);
        salariovigente.nome = salariovigente.nome.toUpperCase();
      }
    },
  },
});

module.exports = SalarioVigente;
