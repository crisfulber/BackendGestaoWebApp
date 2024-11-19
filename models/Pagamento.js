// models/Pagamento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

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
      model: 'Periodo', // Nome da tabela referenciada
      key: 'idperiodo'
    }
  },
  colaborador_idcolaborador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Colaborador', // Nome da tabela referenciada
      key: 'idcolaborador'
    }
  },
  historicosalario_idhistoricosalario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HistoricoSalario', // Nome da tabela referenciada
      key: 'idhistoricosalario'
    }
  },
  bonificacao_idbonificacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Bonificacao', // Nome da tabela referenciada
      key: 'idbonificacao'
    }
  },
  outrosacrescimos_idoutrosacrescimos: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'OutrosAcrescimos', // Nome da tabela referenciada
      key: 'idoutrosacrescimos'
    }
  },
  horasextras_idhorasextras: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HorasExtras', // Nome da tabela referenciada
      key: 'idhorasextras'
    }
  },
  horasfaltas_idhorasfaltas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HorasFaltas', // Nome da tabela referenciada
      key: 'idhorasfaltas'
    }
  },
  adiantamento_idadiantamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Adiantamento', // Nome da tabela referenciada
      key: 'idadiantamento'
    }
  }
}, {
  tableName: 'pagamento', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Pagamento;
