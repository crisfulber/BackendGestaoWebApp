// models/Colaborador.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Colaborador = sequelize.define('Colaborador', {
  idcolaborador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dtinicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  ativo: {
    type: DataTypes.TINYINT,
    allowNull: false,
    unique: true
  },
  valetransporte: {
    type: DataTypes.TINYINT,
    allowNull: false,
    unique: true
  },
  adiantamento: {
    type: DataTypes.TINYINT,
    allowNull: true,
    unique: true,
  },
  funcaoempresa_idfuncaoempresa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'FuncaoEmpresa', // Nome da tabela referenciada
      key: 'idfuncaoempresa'
    }
  },
  escala_idescala: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Escala', // Nome da tabela referenciada
      key: 'idescala'
    }
  },
  rg_idrg: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'RG', // Nome da tabela referenciada
      key: 'idrg'
    }
  },
  ctps_idctps: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'CTPS', // Nome da tabela referenciada
      key: 'idctps'
    }
  },
  contato_idcontato: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Contato', // Nome da tabela referenciada
      key: 'idcontato'
    }
  },
  nacionalidade_idnacionalidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Nacionalidade', // Nome da tabela referenciada
      key: 'idnacionalidade'
    }
  },
  escolaridade_idescolaridade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Escolaridade', // Nome da tabela referenciada
      key: 'idescolaridade'
    }
  },
  dependentes_iddependentes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Dependentes', // Nome da tabela referenciada
      key: 'iddependentes'
    }
  },
  estadocivil_idestadocivil: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'EstadoCivil', // Nome da tabela referenciada
      key: 'idestadocivil'
    }
  },
  endereco_idendereco: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Endereco', // Nome da tabela referenciada
      key: 'idendereco'
    }
  }
}, {
  tableName: 'colaborador', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Colaborador;
