const Escolaridade = require('../models/Escolaridade');

const getEscolaridade = async (req, res) => {
  try {
    const escolaridade = await Escolaridade.findAll();
    res.json(escolaridade);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getEscolaridadeById = async (req, res) => {
  try {
    const { id } = req.params;
    const escolaridade = await Escolaridade.findOne({ where: { idescolaridade: id } }); 
    if (escolaridade) {
      res.status(200).json(escolaridade); 
    } else {
      res.status(404).send('Registro não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createEscolaridade = async (req, res) => {
  try {
    const escolaridade = await Escolaridade.create(req.body);
    res.status(201).json(escolaridade);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateEscolaridade = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Escolaridade.update(req.body, {
      where: { idescolaridade: id }
    });
    if (updated) {
      const updatedEscolaridade = await Escolaridade.findOne({ where: { idescolaridade: id } });
      res.status(200).json(updatedEscolaridade);
    } else {
      res.status(404).send('Escolaridade não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteEscolaridade = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Escolaridade.destroy({
      where: { idescolaridade: id }
    });
    if (deleted) {
      res.status(204).send('Escolaridade deletada');
    } else {
      res.status(404).send('Escolaridade não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getEscolaridade,
  getEscolaridadeById,
  createEscolaridade,
  updateEscolaridade,
  deleteEscolaridade
};
