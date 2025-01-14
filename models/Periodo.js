const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Periodo = sequelize.define('Periodo', {
  idperiodo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mesreferencia: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  anoreferencia: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'periodo', 
  timestamps: false, 
  hooks: {
    beforeSave: (periodo) => {
      if (typeof periodo.nome === 'string') {
        console.log(`Transformando nome para maiúsculas: ${periodo.nome}`);
        periodo.nome = periodo.nome.toUpperCase();
      }
    },
  },
}
);

module.exports = Periodo;
