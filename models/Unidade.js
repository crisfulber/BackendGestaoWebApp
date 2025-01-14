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
  Unidade.belongsTo(models.Empresa, {
    foreignKey: 'empresa_idempresa',  
    targetKey: 'idempresa'           
  });
  Unidade.belongsTo(models.Endereco, {
    foreignKey: 'endereco_idendereco',  
    targetKey: 'idendereco'           
  });
  Unidade.hasMany(models.Setores, {
    foreignKey: 'unidade_idunidade', 
    sourceKey: 'idunidade'             
  });
};

module.exports = Unidade;
