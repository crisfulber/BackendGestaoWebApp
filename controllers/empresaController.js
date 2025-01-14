// controllers/empresaController.js
const Empresa = require('../models/Empresa');
const Endereco = require('../models/Endereco');
const Municipio = require('../models/Municipio');
const SalarioVigente = require('../models/SalarioVigente');
const { sequelize } = require('../models'); // Para usar transação

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
  console.log('req.body =>', req.body); // Ver o que chegou do front
  const transaction = await sequelize.transaction();
  try {
    let enderecoId = req.body.endereco_idendereco || null;

    // Ajuste para verificar o endereço no formato correto
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
      endereco_idendereco: enderecoId, // se null, falha se a tabela exige not null
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

    // 1) Se veio "Endereco" no body, atualize ou crie (depende da sua lógica).
    //    Você pode buscar o antigo e dar .update() ou, se não existir, criar.
    let enderecoId = req.body.endereco_idendereco;
    if (req.body.Endereco) {
      // Se a empresa já tem 'endereco_idendereco', você pode buscar e dar update:
      // ou, se quiser, criar um novo Endereco do zero.
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

    // 2) Se veio "SalarioVigente" no body, faz algo similar
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

    // 3) Atualizar a empresa
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

    // Se chegou aqui, commit e retorne a empresa atualizada
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
