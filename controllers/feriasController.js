// controllers/feriasController.js
const Ferias = require('../models/Ferias');

const getFerias = async (req, res) => {
  try {
    const ferias = await Ferias.findAll();
    res.json(ferias);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getFeriasById = async (req, res) => {
  try {
    const { id } = req.params;
    const ferias = await Ferias.findOne({ where: { idferias: id } }); 
    if (ferias) {
      res.status(200).json(ferias); 
    } else {
      res.status(404).send('Registro não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createFerias = async (req, res) => {
  try {
    const ferias = await Ferias.create(req.body);
    res.status(201).json(ferias);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateFerias = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Ferias.update(req.body, {
      where: { idferias: id }
    });
    if (updated) {
      const updatedFerias = await Ferias.findOne({ where: { idferias: id } });
      res.status(200).json(updatedFerias);
    } else {
      res.status(404).send('Ferias não encontradas');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteFerias = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Ferias.destroy({
      where: { idferias: id }
    });
    if (deleted) {
      res.status(204).send('Ferias deletadas');
    } else {
      res.status(404).send('Ferias não encontradas');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getFerias,
  getFeriasById,
  createFerias,
  updateFerias,
  deleteFerias
};
