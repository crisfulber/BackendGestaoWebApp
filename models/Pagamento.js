// models/Pagamento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Pagamento = sequelize.define('Pagamento', {
  idpagamento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  periodo_idperiodo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Periodo', 
      key: 'idperiodo'
    }
  },
  colaborador_idcolaborador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Colaborador', 
      key: 'idcolaborador'
    }
  },
  historicosalario_idhistoricosalario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HistoricoSalario',
      key: 'idhistoricosalario'
    }
  },
  bonificacao_idbonificacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Bonificacao', 
      key: 'idbonificacao'
    }
  },
  outrosacrescimos_idoutrosacrescimos: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'OutrosAcrescimos', 
      key: 'idoutrosacrescimos'
    }
  },
  horasextras_idhorasextras: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HorasExtras', 
      key: 'idhorasextras'
    }
  },
  horasfaltas_idhorasfaltas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HorasFaltas', 
      key: 'idhorasfaltas'
    }
  },
  adiantamento_idadiantamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Adiantamento',
      key: 'idadiantamento'
    }
  }
}, {
  tableName: 'pagamento',
  timestamps: false 
});

module.exports = Pagamento;
