const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Endereco = sequelize.define('Endereco', {
  idendereco: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rua: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  complemento: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: false
  },
  municipio_idmunicipio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Municipio', 
      key: 'idmunicipio'
    }
  }
}, {
  tableName: 'endereco', 
  timestamps: false, 
  hooks: {
    beforeSave: (endereco) => {
      const fieldsToUpper = ['rua', 'complemento', 'bairro'];
  
      fieldsToUpper.forEach((field) => {
        if (typeof endereco[field] === 'string') {
          endereco[field] = endereco[field].toUpperCase();
        }
      });
    },
  },
});

Endereco.associate = (models) => {
  Endereco.belongsTo(models.Municipio, {
    foreignKey: 'municipio_idmunicipio', 
    targetKey: 'idmunicipio'            
  });
};

module.exports = Endereco;
