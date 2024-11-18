// controllers/outrosAcrescimosController.js
const OutrosAcrescimos = require('../models/OutrosAcrescimos');

const getOutrosAcrescimos = async (req, res) => {
  try {
    const outrosAcrescimos = await OutrosAcrescimos.findAll();
    res.json(outrosAcrescimos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createOutrosAcrescimos = async (req, res) => {
  try {
    const outrosAcrescimos = await OutrosAcrescimos.create(req.body);
    res.status(201).json(outrosAcrescimos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateOutrosAcrescimos = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await OutrosAcrescimos.update(req.body, {
      where: { idoutros_acrescimos: id }
    });
    if (updated) {
      const updatedOutrosAcrescimos = await OutrosAcrescimos.findOne({ where: { idoutros_acrescimos: id } });
      res.status(200).json(updatedOutrosAcrescimos);
    } else {
      res.status(404).send('Outros Acrescimos não encontrados');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteOutrosAcrescimos = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await OutrosAcrescimos.destroy({
      where: { idoutros_acrescimos: id }
    });
    if (deleted) {
      res.status(204).send('Outros Acrescimos deletados');
    } else {
      res.status(404).send('Outros Acrescimos não encontrados');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getOutrosAcrescimos,
  createOutrosAcrescimos,
  updateOutrosAcrescimos,
  deleteOutrosAcrescimos
};
