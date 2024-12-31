// models/Estado.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Estado = sequelize.define('Estado', {
  idestado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sigla: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'estado', // Nome da tabela no banco de dados
  timestamps: false, // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
  hooks: {
    beforeSave: (estado) => {
      if (typeof estado.nome === 'string') {
        console.log(`Transformando nome para maiúsculas: ${estado.nome}`);
        estado.nome = estado.nome.toUpperCase();
      }
    },
  },
});

Estado.associate = (models) => {
  // 1 Estado tem vários Municípios
  Estado.hasMany(models.Municipio, {
    foreignKey: 'estado_idestado', // campo em Municipio
    sourceKey: 'idestado'          // campo em Estado
  });
};

module.exports = Estado;
