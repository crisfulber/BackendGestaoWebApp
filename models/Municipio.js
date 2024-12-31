// models/Municipio.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

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
      model: 'Estado', // Nome da tabela referenciada
      key: 'idestado'
    }
  }
}, {
  tableName: 'municipio', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

Municipio.associate = (models) => {
  // 1 Município pertence a 1 Estado
  Municipio.belongsTo(models.Estado, {
    foreignKey: 'estado_idestado',
    targetKey: 'idestado'
  });
};

module.exports = Municipio;
