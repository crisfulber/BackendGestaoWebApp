const { col } = require('sequelize');
const Colaborador = require('../models/Colaborador');

const getColaborador = async (req, res) => {
  try {
    const colaborador = await Colaborador.findAll();
    res.json(colaborador);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getColaboradorById = async (req, res) => {
  try {
    const { id } = req.params;
    const colaborador = await Colaborador.findOne({ where: { idcolaborador: id } }); 
    if (colaborador) {
      res.status(200).json(colaborador); 
    } else {
      res.status(404).send('Colaborador não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createColaborador = async (req, res) => {
  try {
    const colaborador = await Colaborador.create(req.body);
    res.status(201).json(colaborador);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateColaborador = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Colaborador.update(req.body, {
      where: { idcolaborador: id }
    });
    if (updated) {
      const updatedColaborador = await Colaborador.findOne({ where: { idcolaborador: id } });
      res.status(200).json(updatedColaborador);
    } else {
      res.status(404).send('Colaborador não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteColaborador = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Colaborador.destroy({
      where: { idcolaborador: id }
    });
    if (deleted) {
      res.status(204).send('Colaborador deletado');
    } else {
      res.status(404).send('Colaborador não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getColaborador,
  getColaboradorById,
  createColaborador,
  updateColaborador,
  deleteColaborador
};
