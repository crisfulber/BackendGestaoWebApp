// controllers/rescisaoController.js
const Rescisao = require('../models/Rescisao');

const getRescisao = async (req, res) => {
  try {
    const rescisao = await Rescisao.findAll();
    res.json(rescisao);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getRescisaoById = async (req, res) => {
  try {
    const { id } = req.params;
    const rescisao = await Rescisao.findOne({ where: { idrescisao: id } }); 
    if (rescisao) {
      res.status(200).json(rescisao); 
    } else {
      res.status(404).send('Registro não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createRescisao = async (req, res) => {
  try {
    const rescisao = await Rescisao.create(req.body);
    res.status(201).json(rescisao);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateRescisao = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Rescisao.update(req.body, {
      where: { idrescisao: id }
    });
    if (updated) {
      const updatedRescisao = await Rescisao.findOne({ where: { idrescisao: id } });
      res.status(200).json(updatedRescisao);
    } else {
      res.status(404).send('Rescisao não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteRescisao = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Rescisao.destroy({
      where: { idrescisao: id }
    });
    if (deleted) {
      res.status(204).send('Rescisao deletada');
    } else {
      res.status(404).send('Rescisao não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getRescisao,
  getRescisaoById,
  createRescisao,
  updateRescisao,
  deleteRescisao
};
