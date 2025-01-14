const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

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
      model: 'FuncaoEmpresa', 
      key: 'idfuncaoempresa'
    }
  },
  escala_idescala: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Escala', 
      key: 'idescala'
    }
  },
  rg_idrg: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'RG',
      key: 'idrg'
    }
  },
  ctps_idctps: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'CTPS', 
      key: 'idctps'
    }
  },
  contato_idcontato: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Contato', 
      key: 'idcontato'
    }
  },
  nacionalidade_idnacionalidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Nacionalidade', 
      key: 'idnacionalidade'
    }
  },
  escolaridade_idescolaridade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Escolaridade',
      key: 'idescolaridade'
    }
  },
  dependentes_iddependentes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Dependentes', 
      key: 'iddependentes'
    }
  },
  estadocivil_idestadocivil: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'EstadoCivil', 
      key: 'idestadocivil'
    }
  },
  endereco_idendereco: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Endereco', 
      key: 'idendereco'
    }
  }
}, {
  tableName: 'colaborador', 
  timestamps: false 
});

module.exports = Colaborador;
