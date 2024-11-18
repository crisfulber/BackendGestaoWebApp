// models/Pagamento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Pagamento = sequelize.define('Pagamento', {
  idpagamento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mes_ano_idmes_ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'MesAno', // Nome da tabela referenciada
      key: 'idmes_ano'
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
  historico_salario_idhistorico_salario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HistoricoSalario', // Nome da tabela referenciada
      key: 'idhistorico_salario'
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
  outros_acrescimos_idoutros_acrescimos: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'OutrosAcrescimos', // Nome da tabela referenciada
      key: 'idoutros_acrescimos'
    }
  },
  horas_extras_idhoras_extras: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HorasExtras', // Nome da tabela referenciada
      key: 'idhoras_extras'
    }
  },
  horas_faltas_idhoras_faltas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'HorasFaltas', // Nome da tabela referenciada
      key: 'idhoras_faltas'
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
