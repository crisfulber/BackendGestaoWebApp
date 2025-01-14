// models/FuncaoEmpresa.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FuncaoEmpresa = sequelize.define('FuncaoEmpresa', {
  idfuncaoempresa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unidade_idunidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Unidade', 
      key: 'idunidade'
    }
  }
}, {
  tableName: 'funcaoempresa', 
  timestamps: false,
  hooks: {
    beforeSave: (setor) => {
      if (typeof setor.nome === 'string') {
        console.log(`Transformando nome para maiúsculas: ${setor.nome}`);
        setor.nome = setor.nome.toUpperCase();
      }
    },
  },
});

FuncaoEmpresa.associate = (models) => {
  FuncaoEmpresa.belongsTo(models.Unidade, {
    foreignKey: 'unidade_idunidade',  
    targetKey: 'idunidade'           
  });

};

module.exports = FuncaoEmpresa;
