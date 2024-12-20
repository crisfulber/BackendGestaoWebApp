const sequelize = require('../config/database');
const models = {};

// models/index.js
const Adiantamento = require('./Adiantamento');
const Bonificacao = require('./Bonificacao');
const Colaborador = require('./Colaborador');
const Contato = require('./Contato');
const CPF = require('./CPF');
const CTPS = require('./CTPS');
const DecimoTerceiro = require('./DecimoTerceiro');
const Dependentes = require('./Dependentes');
const Empresa = require('./Empresa');
const Endereco = require('./Endereco');
const Escala = require('./Escala');
const Escolaridade = require('./Escolaridade');
const Estado = require('./Estado');
const EstadoCivil = require('./EstadoCivil');
const Ferias = require('./Ferias');
const FuncaoEmpresa = require('./FuncaoEmpresa');
const FuncaoRegistro = require('./FuncaoRegistro');
const HistoricoSalario = require('./HistoricoSalario');
const HorasExtras = require('./HorasExtras');
const HorasFaltas = require('./HorasFaltas');
const Periodo = require('./Periodo');
const Municipio = require('./Municipio');
const Nacionalidade = require('./Nacionalidade');
const OutrosAcrescimos = require('./OutrosAcrescimos');
const OutrosDescontos = require('./OutrosDescontos');
const Pagamento = require('./Pagamento');
const Registro = require('./Registro');
const Rescisao = require('./Rescisao');
const RG = require('./RG');
const SalarioVigente = require('./SalarioVigente');
const Setores = require('./Setores');
const SetorUsuario = require('./SetorUsuario');
const TipoDescAcres = require('./TipoDescAcres');
const Unidade = require('./Unidade');
const Usuarios = require('./Usuarios');

module.exports = {
  Adiantamento,
  Bonificacao,
  Colaborador,
  Contato,
  CPF,
  CTPS,
  DecimoTerceiro,
  Dependentes,
  Empresa,
  Endereco,
  Escala,
  Escolaridade,
  Estado,
  EstadoCivil,
  Ferias,
  FuncaoEmpresa,
  FuncaoRegistro,
  HistoricoSalario,
  HorasExtras,
  HorasFaltas,
  Periodo,
  Municipio,
  Nacionalidade,
  OutrosAcrescimos,
  OutrosDescontos,
  Pagamento,
  Registro,
  Rescisao,
  RG,
  SalarioVigente,
  Setores,
  SetorUsuario,
  TipoDescAcres,
  Unidade,
  Usuarios,
};

// Adicionar os modelos ao Sequelize
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

// Exporte os modelos e a instância do Sequelize
module.exports = {
  sequelize,
  ...models,
};