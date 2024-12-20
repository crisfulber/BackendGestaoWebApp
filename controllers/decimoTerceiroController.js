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

const getDecimoTerceiroById = async (req, res) => {
  try {
    const { id } = req.params;
    const decimoTerceiro = await DecimoTerceiro.findOne({ where: { iddecimoterceiro: id } }); 
    if (decimoTerceiro) {
      res.status(200).json(decimoTerceiro); 
    } else {
      res.status(404).send('Registro não encontrado'); 
    }
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
      where: { iddecimoterceiro: id }
    });
    if (updated) {
      const updatedDecimoTerceiro = await DecimoTerceiro.findOne({ where: { iddecimoterceiro: id } });
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
      where: { iddecimoterceiro: id }
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
  getDecimoTerceiroById,
  createDecimoTerceiro,
  updateDecimoTerceiro,
  deleteDecimoTerceiro
};
