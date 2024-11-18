// controllers/tipoDescAcresController.js
const TipoDescAcres = require('../models/TipoDescAcres');

const getTipoDescAcres = async (req, res) => {
  try {
    const tipoDescAcres = await TipoDescAcres.findAll();
    res.json(tipoDescAcres);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createTipoDescAcres = async (req, res) => {
  try {
    const tipoDescAcres = await TipoDescAcres.create(req.body);
    res.status(201).json(tipoDescAcres);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateTipoDescAcres = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await TipoDescAcres.update(req.body, {
      where: { idtipo_desc_acres: id }
    });
    if (updated) {
      const updatedTipoDescAcres = await TipoDescAcres.findOne({ where: { idtipo_desc_acres: id } });
      res.status(200).json(updatedTipoDescAcres);
    } else {
      res.status(404).send('TipoDescAcres não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteTipoDescAcres = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await TipoDescAcres.destroy({
      where: { idtipo_desc_acres: id }
    });
    if (deleted) {
      res.status(204).send('TipoDescAcres deletado');
    } else {
      res.status(404).send('TipoDescAcres não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getTipoDescAcres,
  createTipoDescAcres,
  updateTipoDescAcres,
  deleteTipoDescAcres
};
