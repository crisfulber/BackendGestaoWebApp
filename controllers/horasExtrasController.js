// controllers/horasExtrasController.js
const HorasExtras = require('../models/HorasExtras');

const getHorasExtras = async (req, res) => {
  try {
    const horasExtras = await HorasExtras.findAll();
    res.json(horasExtras);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createHorasExtras = async (req, res) => {
  try {
    const horasExtras = await HorasExtras.create(req.body);
    res.status(201).json(horasExtras);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateHorasExtras = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await HorasExtras.update(req.body, {
      where: { idhoras_extras: id }
    });
    if (updated) {
      const updatedHorasExtras = await HorasExtras.findOne({ where: { idhoras_extras: id } });
      res.status(200).json(updatedHorasExtras);
    } else {
      res.status(404).send('Horas Extras não encontradas');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteHorasExtras = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await HorasExtras.destroy({
      where: { idhoras_extras: id }
    });
    if (deleted) {
      res.status(204).send('Horas Extras deletadas');
    } else {
      res.status(404).send('Horas Extras não encontradas');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getHorasExtras,
  createHorasExtras,
  updateHorasExtras,
  deleteHorasExtras
};
