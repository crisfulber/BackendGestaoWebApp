const Estado = require('../models/Estado');

const getEstado = async (req, res) => {
  try {
    const estado = await Estado.findAll();
    res.json(estado);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getEstadoById = async (req, res) => {
  try {
    const { id } = req.params;
    const estado = await Estado.findOne({ where: { idestado: id } }); 
    if (estado) {
      res.status(200).json(estado); 
    } else {
      res.status(404).send('Registro não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createEstado = async (req, res) => {
  try {
    const estado = await Estado.create(req.body);
    res.status(201).json(estado);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateEstado = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Estado.update(req.body, {
      where: { idestado: id }
    });
    if (updated) {
      const updatedEstado = await Estado.findOne({ where: { idestado: id } });
      res.status(200).json(updatedEstado);
    } else {
      res.status(404).send('Estado não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteEstado = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Estado.destroy({
      where: { idestado: id }
    });
    if (deleted) {
      res.status(204).send('Estado deletado');
    } else {
      res.status(404).send('Estado não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getEstado,
  getEstadoById,
  createEstado,
  updateEstado,
  deleteEstado
};
