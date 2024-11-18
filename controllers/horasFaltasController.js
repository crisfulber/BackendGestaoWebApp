// controllers/horasFaltasController.js
const HorasFaltas = require('../models/HorasFaltas');

const getHorasFaltas = async (req, res) => {
  try {
    const horasFaltas = await HorasFaltas.findAll();
    res.json(horasFaltas);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createHorasFaltas = async (req, res) => {
  try {
    const horasFaltas = await HorasFaltas.create(req.body);
    res.status(201).json(horasFaltas);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateHorasFaltas = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await HorasFaltas.update(req.body, {
      where: { idhoras_faltas: id }
    });
    if (updated) {
      const updatedHorasFaltas = await HorasFaltas.findOne({ where: { idhoras_faltas: id } });
      res.status(200).json(updatedHorasFaltas);
    } else {
      res.status(404).send('HorasFaltas não encontradas');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteHorasFaltas = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await HorasFaltas.destroy({
      where: { idhoras_faltas: id }
    });
    if (deleted) {
      res.status(204).send('HorasFaltas deletadas');
    } else {
      res.status(404).send('HorasFaltas não encontradas');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getHorasFaltas,
  createHorasFaltas,
  updateHorasFaltas,
  deleteHorasFaltas
};
