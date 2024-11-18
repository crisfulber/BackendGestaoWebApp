// controllers/pagamentoController.js
const Pagamento = require('../models/Pagamento');

const getPagamento = async (req, res) => {
  try {
    const pagamento = await Pagamento.findAll();
    res.json(pagamento);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createPagamento = async (req, res) => {
  try {
    const pagamento = await Pagamento.create(req.body);
    res.status(201).json(pagamento);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updatePagamento = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Pagamento.update(req.body, {
      where: { idpagamento: id }
    });
    if (updated) {
      const updatedPagamento = await Pagamento.findOne({ where: { idpagamento: id } });
      res.status(200).json(updatedPagamento);
    } else {
      res.status(404).send('Pagamento não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deletePagamento = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pagamento.destroy({
      where: { idpagamento: id }
    });
    if (deleted) {
      res.status(204).send('Pagamento deletado');
    } else {
      res.status(404).send('Pagamento não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getPagamento,
  createPagamento,
  updatePagamento,
  deletePagamento
};
