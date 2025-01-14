const Bonificacao = require('../models/Bonificacao');

const getBonificacao = async (req, res) => {
  try {
    const bonificacao = await Bonificacao.findAll();
    res.json(bonificacao);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getBonificacaoById = async (req, res) => {
  try {
    const { id } = req.params;
    const bonificacao = await Bonificacao.findOne({ where: { idbonificacao: id } }); 
    if (bonificacao) {
      res.status(200).json(bonificacao); 
    } else {
      res.status(404).send('Bonificacao não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createBonificacao = async (req, res) => {
  try {
    const bonificacao = await Bonificacao.create(req.body);
    res.status(201).json(bonificacao);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateBonificacao = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Bonificacao.update(req.body, {
      where: { idbonificacao: id }
    });
    if (updated) {
      const updatedBonificacao = await Bonificacao.findOne({ where: { idbonificacao: id } });
      res.status(200).json(updatedBonificacao);
    } else {
      res.status(404).send('Bonificação não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteBonificacao = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Bonificacao.destroy({
      where: { idbonificacao: id }
    });
    if (deleted) {
      res.status(204).send('Bonificação deletada');
    } else {
      res.status(404).send('Bonificação não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getBonificacao,
  getBonificacaoById,
  createBonificacao,
  updateBonificacao,
  deleteBonificacao
};
