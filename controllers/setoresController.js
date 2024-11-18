// controllers/setoresController.js
const Setores = require('../models/Setores');

const getSetores = async (req, res) => {
  try {
    const setores = await Setores.findAll();
    res.json(setores);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createSetores = async (req, res) => {
  try {
    const setores = await Setores.create(req.body);
    res.status(201).json(setores);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateSetores = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Setores.update(req.body, {
      where: { idsetores: id }
    });
    if (updated) {
      const updatedSetores = await Setores.findOne({ where: { idsetores: id } });
      res.status(200).json(updatedSetores);
    } else {
      res.status(404).send('Setor não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteSetores = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Setores.destroy({
      where: { idsetores: id }
    });
    if (deleted) {
      res.status(204).send('Setor deletado');
    } else {
      res.status(404).send('Setor não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getSetores,
  createSetores,
  updateSetores,
  deleteSetores
};
