// controllers/mesAnoController.js
const MesAno = require('../models/MesAno');

const getMesAno = async (req, res) => {
  try {
    const mesAno = await MesAno.findAll();
    res.json(mesAno);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createMesAno = async (req, res) => {
  try {
    const mesAno = await MesAno.create(req.body);
    res.status(201).json(mesAno);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateMesAno = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await MesAno.update(req.body, {
      where: { idmes_ano: id }
    });
    if (updated) {
      const updatedMesAno = await MesAno.findOne({ where: { idmes_ano: id } });
      res.status(200).json(updatedMesAno);
    } else {
      res.status(404).send('Mes/Ano não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteMesAno = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await MesAno.destroy({
      where: { idmes_ano: id }
    });
    if (deleted) {
      res.status(204).send('Mes/Ano deletado');
    } else {
      res.status(404).send('Mes/Ano não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getMesAno,
  createMesAno,
  updateMesAno,
  deleteMesAno
};
