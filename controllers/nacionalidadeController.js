// controllers/nacionalidadeController.js
const Nacionalidade = require('../models/Nacionalidade');

const getNacionalidade = async (req, res) => {
  try {
    const nacionalidade = await Nacionalidade.findAll();
    res.json(nacionalidade);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createNacionalidade = async (req, res) => {
  try {
    const nacionalidade = await Nacionalidade.create(req.body);
    res.status(201).json(nacionalidade);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateNacionalidade = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Nacionalidade.update(req.body, {
      where: { idnacionalidade: id }
    });
    if (updated) {
      const updatedNacionalidade = await Nacionalidade.findOne({ where: { idnacionalidade: id } });
      res.status(200).json(updatedNacionalidade);
    } else {
      res.status(404).send('Nacionalidade não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteNacionalidade = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Nacionalidade.destroy({
      where: { idnacionalidade: id }
    });
    if (deleted) {
      res.status(204).send('Nacionalidade deletada');
    } else {
      res.status(404).send('Nacionalidade não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getNacionalidade,
  createNacionalidade,
  updateNacionalidade,
  deleteNacionalidade
};
