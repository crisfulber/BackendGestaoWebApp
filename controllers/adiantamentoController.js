// controllers/adiantamentoController.js
const Adiantamento = require('../models/Adiantamento');

const getAdiantamento = async (req, res) => {
  try {
    const adiantamento = await Adiantamento.findAll();
    res.json(adiantamento);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAdiantamentoById = async (req, res) => {
  try {
    const { id } = req.params;
    const adiantamento = await Adiantamento.findOne({ where: { idadiantamento: id } }); 
    if (adiantamento) {
      res.status(200).json(adiantamento); 
    } else {
      res.status(404).send('Adiantamento não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createAdiantamento = async (req, res) => {
  try {
    const adiantamento = await Adiantamento.create(req.body);
    res.status(201).json(adiantamento);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateAdiantamento = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Adiantamento.update(req.body, {
      where: { idadiantamento: id }
    });
    if (updated) {
      const updatedAdiantamento = await Adiantamento.findOne({ where: { idadiantamento: id } });
      res.status(200).json(updatedAdiantamento);
    } else {
      res.status(404).send('Adiantamento não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteAdiantamento = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Adiantamento.destroy({
      where: { idadiantamento: id }
    });
    if (deleted) {
      res.status(204).send('Adiantamento deletado');
    } else {
      res.status(404).send('Adiantamento não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAdiantamento,
  getAdiantamentoById,
  createAdiantamento,
  updateAdiantamento,
  deleteAdiantamento
};
