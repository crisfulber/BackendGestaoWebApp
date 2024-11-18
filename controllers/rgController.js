// controllers/rgController.js
const RG = require('../models/RG');

const getRG = async (req, res) => {
  try {
    const rg = await RG.findAll();
    res.json(rg);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createRG = async (req, res) => {
  try {
    const rg = await RG.create(req.body);
    res.status(201).json(rg);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateRG = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await RG.update(req.body, {
      where: { idrg: id }
    });
    if (updated) {
      const updatedRG = await RG.findOne({ where: { idrg: id } });
      res.status(200).json(updatedRG);
    } else {
      res.status(404).send('RG não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteRG = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await RG.destroy({
      where: { idrg: id }
    });
    if (deleted) {
      res.status(204).send('RG deletado');
    } else {
      res.status(404).send('RG não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getRG,
  createRG,
  updateRG,
  deleteRG
};
