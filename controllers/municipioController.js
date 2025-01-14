const { Municipio, Estado } = require('../models');

const getMunicipio = async (req, res) => {
  try {
    const municipio = await Municipio.findAll({
      include: [{
        model: Estado,
        attributes: ['sigla'] 
      }]
    });
    res.json(municipio);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getMunicipioById = async (req, res) => {
  try {
    const { id } = req.params;
    const municipio = await Municipio.findOne({ where: { idmunicipio: id } }); 
    if (municipio) {
      res.status(200).json(municipio); 
    } else {
      res.status(404).send('Registro não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createMunicipio = async (req, res) => {
  try {
    const municipio = await Municipio.create(req.body);
    res.status(201).json(municipio);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateMunicipio = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Municipio.update(req.body, {
      where: { idmunicipio: id }
    });
    if (updated) {
      const updatedMunicipio = await Municipio.findOne({ where: { idmunicipio: id } });
      res.status(200).json(updatedMunicipio);
    } else {
      res.status(404).send('Municipio não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteMunicipio = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Municipio.destroy({
      where: { idmunicipio: id }
    });
    if (deleted) {
      res.status(204).send('Municipio deletado');
    } else {
      res.status(404).send('Municipio não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getMunicipio,
  getMunicipioById,
  createMunicipio,
  updateMunicipio,
  deleteMunicipio
};
