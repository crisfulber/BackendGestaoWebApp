// controllers/ctpsController.js
const CTPS = require('../models/CTPS');

const getCTPS = async (req, res) => {
  try {
    const ctps = await CTPS.findAll();
    res.json(ctps);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getCTPSById = async (req, res) => {
  try {
    const { id } = req.params;
    const ctps = await ctps.findOne({ where: { idctps: id } }); 
    if (ctps) {
      res.status(200).json(ctps); 
    } else {
      res.status(404).send('CTPS não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createCTPS = async (req, res) => {
  try {
    const ctps = await CTPS.create(req.body);
    res.status(201).json(ctps);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateCTPS = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await CTPS.update(req.body, {
      where: { idctps: id }
    });
    if (updated) {
      const updatedCTPS = await CTPS.findOne({ where: { idctps: id } });
      res.status(200).json(updatedCTPS);
    } else {
      res.status(404).send('CTPS não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteCTPS = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CTPS.destroy({
      where: { idctps: id }
    });
    if (deleted) {
      res.status(204).send('CTPS deletado');
    } else {
      res.status(404).send('CTPS não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getCTPS,
  getCTPSById,
  createCTPS,
  updateCTPS,
  deleteCTPS
};
