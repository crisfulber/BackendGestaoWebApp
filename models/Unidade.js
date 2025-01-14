// models/Unidade.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Unidade = sequelize.define('Unidade', {
  idunidade: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco_idendereco: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Endereco', 
      key: 'idendereco'
    }
  },
  empresa_idempresa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Empresa', 
      key: 'idempresa'
    }
  }
}, {
  tableName: 'unidade', 
  timestamps: false, 
  hooks: {
    beforeSave: (unidade) => {
      const fieldsToUpper = ['nome'];

      fieldsToUpper.forEach((field) => {
        if (typeof unidade[field] === 'string') {
          unidade[field] = unidade[field].toUpperCase();
        }
      });
    },
  },
});

Unidade.associate = (models) => {
  // 1 Unidade pertence a 1 Empresa
  Unidade.belongsTo(models.Empresa, {
    foreignKey: 'empresa_idempresa',  // chave estrangeira em Unidade
    targetKey: 'idempresa'           // chave primária em Empresa
  });
  Unidade.belongsTo(models.Endereco, {
    foreignKey: 'endereco_idendereco',  // chave estrangeira em Unidade
    targetKey: 'idendereco'           // chave primária em Endereco
  });
  // 1 Unidade possui vários Setores
  Unidade.hasMany(models.Setores, {
    foreignKey: 'unidade_idunidade', // chave estrangeira em Setores
    sourceKey: 'idunidade'             // chave primária em Unidade
  });
};

module.exports = Unidade;
