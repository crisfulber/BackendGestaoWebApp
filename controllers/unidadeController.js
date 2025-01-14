const { Empresa, Endereco, Unidade, Municipio, sequelize } = require('../models');

const getUnidade = async (req, res) => {
  try {
    const unidade = await Unidade.findAll({
      include: [
        {
          model: Empresa,
          attributes: ['nome'] 
        },
        {
          model: Endereco,
          attributes: ['rua', 'numero', 'complemento', 'bairro', 'cep'],
          include: {
            model: Municipio,
            attributes: ['nome'] 
          }
        }
      ]
    });
    res.json(unidade);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getUnidadeById = async (req, res) => {
  try {
    const { id } = req.params;
    const unidade = await Unidade.findOne({
      where: { idunidade: id },
      include: [
        {
          model: Empresa,
          attributes: ['nome']
        },
        {
          model: Endereco,
          attributes: ['rua', 'numero', 'complemento', 'bairro', 'cep'],
          include: {
            model: Municipio,
            attributes: ['nome']
          }
        }
      ]
    });
    if (unidade) {
      res.status(200).json(unidade);
    } else {
      res.status(404).send('Registro não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createUnidade = async (req, res) => {
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

    const empresa = await Empresa.findOne({
      where: { idempresa: req.body.empresa_idempresa }
    });

    if (!empresa) {
      throw new Error('Empresa não encontrada');
    }

    const novaUnidade = await Unidade.create({
      nome: req.body.nome,
      endereco_idendereco: enderecoId, 
      empresa_idempresa: req.body.empresa_idempresa 
    }, { transaction });

    await transaction.commit();
    res.status(201).json(novaUnidade);

  } catch (error) {
    await transaction.rollback();
    console.error('Erro ao criar unidade:', error);
    res.status(500).json({ error: error.message });
  }
};

const updateUnidade = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Unidade.update(req.body, {
      where: { idunidade: id }
    });
    if (updated) {
      const updatedUnidade = await Unidade.findOne({
        where: { idunidade: id },
        include: [{
          model: Empresa,
          attributes: ['nome']
        }]
      });
      res.status(200).json(updatedUnidade);
    } else {
      res.status(404).send('Unidade não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteUnidade = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Unidade.destroy({
      where: { idunidade: id }
    });
    if (deleted) {
      res.status(204).send('Unidade deletada');
    } else {
      res.status(404).send('Unidade não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getUnidade,
  getUnidadeById,
  createUnidade,
  updateUnidade,
  deleteUnidade
};
