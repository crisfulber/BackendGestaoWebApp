// controllers/decimoTerceiroController.js
const DecimoTerceiro = require('../models/DecimoTerceiro');

const getDecimoTerceiro = async (req, res) => {
  try {
    const decimoTerceiro = await DecimoTerceiro.findAll();
    res.json(decimoTerceiro);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createDecimoTerceiro = async (req, res) => {
  try {
    const decimoTerceiro = await DecimoTerceiro.create(req.body);
    res.status(201).json(decimoTerceiro);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateDecimoTerceiro = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await DecimoTerceiro.update(req.body, {
      where: { iddecimo_terceiro: id }
    });
    if (updated) {
      const updatedDecimoTerceiro = await DecimoTerceiro.findOne({ where: { iddecimo_terceiro: id } });
      res.status(200).json(updatedDecimoTerceiro);
    } else {
      res.status(404).send('Decimo Terceiro não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteDecimoTerceiro = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await DecimoTerceiro.destroy({
      where: { iddecimo_terceiro: id }
    });
    if (deleted) {
      res.status(204).send('Decimo Terceiro deletado');
    } else {
      res.status(404).send('Decimo Terceiro não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getDecimoTerceiro,
  createDecimoTerceiro,
  updateDecimoTerceiro,
  deleteDecimoTerceiro
};
