// controllers/registroController.js
const Registro = require('../models/Registro');

const getRegistro = async (req, res) => {
  try {
    const registro = await Registro.findAll();
    res.json(registro);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getRegistroById = async (req, res) => {
  try {
    const { id } = req.params;
    const registro = await Registro.findOne({ where: { idregistro: id } }); 
    if (registro) {
      res.status(200).json(registro); 
    } else {
      res.status(404).send('Registro não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createRegistro = async (req, res) => {
  try {
    const registro = await Registro.create(req.body);
    res.status(201).json(registro);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateRegistro = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Registro.update(req.body, {
      where: { idregistro: id }
    });
    if (updated) {
      const updatedRegistro = await Registro.findOne({ where: { idregistro: id } });
      res.status(200).json(updatedRegistro);
    } else {
      res.status(404).send('Registro não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteRegistro = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Registro.destroy({
      where: { idregistro: id }
    });
    if (deleted) {
      res.status(204).send('Registro deletado');
    } else {
      res.status(404).send('Registro não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getRegistro,
  getRegistroById,
  createRegistro,
  updateRegistro,
  deleteRegistro
};
