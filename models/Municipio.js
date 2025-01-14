// models/Municipio.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Municipio = sequelize.define('Municipio', {
  idmunicipio: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado_idestado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Estado',
      key: 'idestado'
    }
  }
}, {
  tableName: 'municipio',
  timestamps: false,
  hooks: {
    beforeSave: (municipio) => {
      const fieldsToUpper = ['nome'];

      fieldsToUpper.forEach((field) => {
        if (typeof municipio[field] === 'string') {
          municipio[field] = municipio[field].toUpperCase();
        }
      });
    },
  },
});

Municipio.associate = (models) => {
  Municipio.belongsTo(models.Estado, {
    foreignKey: 'estado_idestado',
    targetKey: 'idestado'
  });

  Municipio.hasMany(models.Endereco, {
    foreignKey: 'municipio_idmunicipio',
    sourceKey: 'idmunicipio'
  });
};

module.exports = Municipio;
