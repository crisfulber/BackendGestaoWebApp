const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SalarioVigente = sequelize.define('SalarioVigente', {
  idsalariovigente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dtinicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dtfim: {
    type: DataTypes.DATE,
    allowNull: true
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
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
  tableName: 'salariovigente', 
  timestamps: false 
});

SalarioVigente.associate = (models) => {
  SalarioVigente.hasMany(models.Empresa, {
    foreignKey: 'salariovigente_idsalariovigente', 
    sourceKey: 'idsalariovigente'                  
  });
};

SalarioVigente.associate = (models) => {
  SalarioVigente.belongsTo(models.Empresa, {
    foreignKey: 'empresa_idempresa',  
    targetKey: 'idempresa'           
  });
  
};

module.exports = SalarioVigente;
