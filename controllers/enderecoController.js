const { Municipio } = require('../models');
const Endereco = require('../models/Endereco');

const getEndereco = async (req, res) => {
  try {
    const endereco = await Endereco.findAll({
          include: [{
            model: Municipio,
            attributes: ['nome'] 
          }]
        });
    res.json(endereco);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getEnderecoById = async (req, res) => {
  try {
    const { id } = req.params;
    const endereco = await Endereco.findOne({ where: { idendereco: id } }); 
    if (endereco) {
      res.status(200).json(endereco); 
    } else {
      res.status(404).send('Registro não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createEndereco = async (req, res) => {
  try {
    const endereco = await Endereco.create(req.body);
    res.status(201).json(endereco);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateEndereco = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Endereco.update(req.body, {
      where: { idendereco: id }
    });
    if (updated) {
      const updatedEndereco = await Endereco.findOne({ where: { idendereco: id } });
      res.status(200).json(updatedEndereco);
    } else {
      res.status(404).send('Endereco não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteEndereco = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Endereco.destroy({
      where: { idendereco: id }
    });
    if (deleted) {
      res.status(204).send('Endereco deletado');
    } else {
      res.status(404).send('Endereco não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getEndereco,
  getEnderecoById,
  createEndereco,
  updateEndereco,
  deleteEndereco
};
