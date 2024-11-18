// controllers/empresaController.js
const Empresa = require('../models/Empresa');

const getEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findAll();
    res.json(empresa);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.create(req.body);
    res.status(201).json(empresa);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateEmpresa = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Empresa.update(req.body, {
      where: { idempresa: id }
    });
    if (updated) {
      const updatedEmpresa = await Empresa.findOne({ where: { idempresa: id } });
      res.status(200).json(updatedEmpresa);
    } else {
      res.status(404).send('Empresa não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
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
  createEmpresa,
  updateEmpresa,
  deleteEmpresa
};
