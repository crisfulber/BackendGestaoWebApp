const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Empresa = sequelize.define('Empresa', {
  idempresa: {
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
  salariovigente_idsalariovigente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'SalarioVigente',
      key: 'idsalariovigente'
    }
  },
}, {
  tableName: 'empresa',
  timestamps: false,
  hooks: {
    beforeSave: (empresa) => {
      const fieldsToUpper = ['nome'];

      fieldsToUpper.forEach((field) => {
        if (typeof empresa[field] === 'string') {
          empresa[field] = empresa[field].toUpperCase();
        }
      });
    },
  },
});

Empresa.associate = (models) => {
  Empresa.belongsTo(models.SalarioVigente, {
    foreignKey: 'salariovigente_idsalariovigente', 
    targetKey: 'idsalariovigente'                  
  });
  Empresa.belongsTo(models.Endereco, {
    foreignKey: 'endereco_idendereco',       
    targetKey: 'idendereco'               
  });
};

module.exports = Empresa;
