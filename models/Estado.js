// models/Estado.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

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
  tableName: 'estado', 
  timestamps: false, 
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
  Estado.hasMany(models.Municipio, {
    foreignKey: 'estado_idestado', 
    sourceKey: 'idestado'         
  });
};

module.exports = Estado;
