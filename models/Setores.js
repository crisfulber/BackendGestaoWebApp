// models/Setores.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Setores = sequelize.define('Setores', {
  idsetores: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'setores',
  timestamps: false,
  hooks: {
    beforeSave: (setor) => {
      if (typeof setor.nome === 'string') {
        console.log(`Transformando nome para maiúsculas: ${setor.nome}`);
        setor.nome = setor.nome.toUpperCase();
      }
    },
  },
}
);

module.exports = Setores;