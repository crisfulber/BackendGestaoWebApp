// controllers/cpfController.js
const CPF = require('../models/CPF');

const getCPF = async (req, res) => {
  try {
    const cpf = await CPF.findAll();
    res.json(cpf);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createCPF = async (req, res) => {
  try {
    const cpf = await CPF.create(req.body);
    res.status(201).json(cpf);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateCPF = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await CPF.update(req.body, {
      where: { idcpf: id }
    });
    if (updated) {
      const updatedCPF = await CPF.findOne({ where: { idcpf: id } });
      res.status(200).json(updatedCPF);
    } else {
      res.status(404).send('CPF não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteCPF = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CPF.destroy({
      where: { idcpf: id }
    });
    if (deleted) {
      res.status(204).send('CPF deletado');
    } else {
      res.status(404).send('CPF não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getCPF,
  createCPF,
  updateCPF,
  deleteCPF
};
