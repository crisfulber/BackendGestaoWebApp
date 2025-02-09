const Empresa = require('../models/Empresa');
const Endereco = require('../models/Endereco');
const Municipio = require('../models/Municipio');
const SalarioVigente = require('../models/SalarioVigente');
const { sequelize } = require('../models'); 

const getEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findAll({
      include: [
        {
          model: Endereco,
          attributes: ['rua', 'numero', 'complemento', 'bairro', 'cep'],
          include: {
            model: Municipio,
            attributes: ['nome']
          }
        },
        {
          model: SalarioVigente,
          attributes: ['valor']
        }
      ]
    });
    res.json(empresa);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


const getEmpresaById = async (req, res) => {
  try {
    const { id } = req.params;
    const empresa = await Empresa.findOne({
      where: { idempresa: id },
      include: [
        {
          model: Endereco,
          attributes: ['rua', 'numero', 'complemento', 'bairro', 'cep'],
          include: {
            model: Municipio,
            attributes: ['nome']
          }
        },
        {
          model: SalarioVigente,
          attributes: ['valor']
        }
      ]
    });
    if (empresa) {
      res.status(200).json(empresa);
    } else {
      res.status(404).send('Registro não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};


const createEmpresa = async (req, res) => {
  console.log('req.body =>', req.body); 
  const transaction = await sequelize.transaction();
  try {
    let enderecoId = req.body.endereco_idendereco || null;

    if (req.body['endereco.rua']) {
      console.log('Criando Endereco com:', req.body);
      const enderecoData = {
        rua: req.body['endereco.rua'],
        numero: req.body['endereco.numero'],
        complemento: req.body['endereco.complemento'],
        bairro: req.body['endereco.bairro'],
        cep: req.body['endereco.cep'],
        municipio_idmunicipio: req.body['endereco.municipio_idmunicipio']
      };
      const novoEnd = await Endereco.create(enderecoData, { transaction });
      enderecoId = novoEnd.idendereco;
    } else {
      console.log('Nenhum subobjeto Endereco recebido.');
    }

    console.log('SalarioVigente ID =>', req.body.salariovigente_idsalariovigente);

    const novaEmpresa = await Empresa.create({
      nome: req.body.nome,
      endereco_idendereco: enderecoId, 
      salariovigente_idsalariovigente: req.body.salariovigente_idsalariovigente
    }, { transaction });

    await transaction.commit();
    res.status(201).json(novaEmpresa);

  } catch (error) {
    await transaction.rollback();
    console.error('Erro ao criar empresa:', error);
    res.status(500).json({ error: error.message });
  }
};


const updateEmpresa = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { id } = req.params;

    let enderecoId = req.body.endereco_idendereco;
    if (req.body.Endereco) {
      if (enderecoId) {
        await Endereco.update(req.body.Endereco, {
          where: { idendereco: enderecoId },
          transaction
        });
      } else {
        const novoEndereco = await Endereco.create(req.body.Endereco, { transaction });
        enderecoId = novoEndereco.idendereco;
      }
    }

    let salarioVigenteId = req.body.salariovigente_idsalariovigente;
    if (req.body.SalarioVigente) {
      if (salarioVigenteId) {
        await SalarioVigente.update(req.body.SalarioVigente, {
          where: { idsalariovigente: salarioVigenteId },
          transaction
        });
      } else {
        const novoSalario = await SalarioVigente.create(req.body.SalarioVigente, { transaction });
        salarioVigenteId = novoSalario.idsalariovigente;
      }
    }

    const [updated] = await Empresa.update({
      nome: req.body.nome,
      endereco_idendereco: enderecoId,
      salariovigente_idsalariovigente: salarioVigenteId
    }, {
      where: { idempresa: id },
      transaction
    });

    if (!updated) {
      await transaction.rollback();
      return res.status(404).send('Empresa não encontrada');
    }

    await transaction.commit();
    const updatedEmpresa = await Empresa.findOne({ where: { idempresa: id } });
    return res.status(200).json(updatedEmpresa);

  } catch (error) {
    await transaction.rollback();
    return res.status(500).json({ error: error.message });
  }
};

const deleteEmpresa = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Empresa.destroy({
      where: { idempresa: id }
    });
    if (deleted) {
      res.status(204).send('Empresa deletada');
    } else {
      res.status(404).send('Empresa não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getEmpresa,
  getEmpresaById,
  createEmpresa,
  updateEmpresa,
  deleteEmpresa
};
