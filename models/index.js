const sequelize = require('../config/database');
const models = {};

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

models.Adiantamento = Adiantamento;
models.Bonificacao = Bonificacao;
models.Colaborador = Colaborador;
models.Contato = Contato;
models.CPF = CPF;
models.CTPS = CTPS;
models.DecimoTerceiro = DecimoTerceiro;
models.Dependentes = Dependentes;
models.Empresa = Empresa;
models.Endereco = Endereco;
models.Escala = Escala;
models.Escolaridade = Escolaridade;
models.Estado = Estado;
models.EstadoCivil = EstadoCivil;
models.Ferias = Ferias;
models.FuncaoEmpresa = FuncaoEmpresa;
models.FuncaoRegistro = FuncaoRegistro;
models.HistoricoSalario = HistoricoSalario;
models.HorasExtras = HorasExtras;
models.HorasFaltas = HorasFaltas;
models.Periodo = Periodo;
models.Municipio = Municipio;
models.Nacionalidade = Nacionalidade;
models.OutrosAcrescimos = OutrosAcrescimos;
models.OutrosDescontos = OutrosDescontos;
models.Pagamento = Pagamento;
models.Registro = Registro;
models.Rescisao = Rescisao;
models.RG = RG;
models.SalarioVigente = SalarioVigente;
models.Setores = Setores;
models.SetorUsuario = SetorUsuario;
models.TipoDescAcres = TipoDescAcres;
models.Unidade = Unidade;
models.Usuarios = Usuarios;

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = {
  sequelize,
  ...models,
};