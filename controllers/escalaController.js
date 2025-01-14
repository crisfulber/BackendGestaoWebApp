const Escala = require('../models/Escala');

const getEscala = async (req, res) => {
  try {
    const escala = await Escala.findAll();
    res.json(escala);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getEscalaById = async (req, res) => {
  try {
    const { id } = req.params;
    const escala = await Escala.findOne({ where: { idescala: id } }); 
    if (escala) {
      res.status(200).json(escala); 
    } else {
      res.status(404).send('Registro não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createEscala = async (req, res) => {
  try {
    const escala = await Escala.create(req.body);
    res.status(201).json(escala);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateEscala = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Escala.update(req.body, {
      where: { idescala: id }
    });
    if (updated) {
      const updatedEscala = await Escala.findOne({ where: { idescala: id } });
      res.status(200).json(updatedEscala);
    } else {
      res.status(404).send('Escala não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteEscala = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Escala.destroy({
      where: { idescala: id }
    });
    if (deleted) {
      res.status(204).send('Escala deletada');
    } else {
      res.status(404).send('Escala não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getEscala,
  getEscalaById,
  createEscala,
  updateEscala,
  deleteEscala
};
