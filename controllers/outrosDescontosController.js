// controllers/outrosDescontosController.js
const OutrosDescontos = require('../models/OutrosDescontos');

const getOutrosDescontos = async (req, res) => {
  try {
    const outrosDescontos = await OutrosDescontos.findAll();
    res.json(outrosDescontos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createOutrosDescontos = async (req, res) => {
  try {
    const outrosDescontos = await OutrosDescontos.create(req.body);
    res.status(201).json(outrosDescontos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateOutrosDescontos = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await OutrosDescontos.update(req.body, {
      where: { idoutros_descontos: id }
    });
    if (updated) {
      const updatedOutrosDescontos = await OutrosDescontos.findOne({ where: { idoutros_descontos: id } });
      res.status(200).json(updatedOutrosDescontos);
    } else {
      res.status(404).send('Outros Descontos não encontrados');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteOutrosDescontos = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await OutrosDescontos.destroy({
      where: { idoutros_descontos: id }
    });
    if (deleted) {
      res.status(204).send('Outros Descontos deletados');
    } else {
      res.status(404).send('Outros Descontos não encontrados');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getOutrosDescontos,
  createOutrosDescontos,
  updateOutrosDescontos,
  deleteOutrosDescontos
};
