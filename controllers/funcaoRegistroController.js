// controllers/funcaoRegistroController.js
const FuncaoRegistro = require('../models/FuncaoRegistro');

const getFuncaoRegistro = async (req, res) => {
  try {
    const funcaoRegistro = await FuncaoRegistro.findAll();
    res.json(funcaoRegistro);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createFuncaoRegistro = async (req, res) => {
  try {
    const funcaoRegistro = await FuncaoRegistro.create(req.body);
    res.status(201).json(funcaoRegistro);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateFuncaoRegistro = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await FuncaoRegistro.update(req.body, {
      where: { idfuncao_registro: id }
    });
    if (updated) {
      const updatedFuncaoRegistro = await FuncaoRegistro.findOne({ where: { idfuncao_registro: id } });
      res.status(200).json(updatedFuncaoRegistro);
    } else {
      res.status(404).send('Funcao-Registro não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteFuncaoRegistro = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await FuncaoRegistro.destroy({
      where: { idfuncao_registro: id }
    });
    if (deleted) {
      res.status(204).send('Funcao-Registro deletada');
    } else {
      res.status(404).send('Funcao-Registro não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getFuncaoRegistro,
  createFuncaoRegistro,
  updateFuncaoRegistro,
  deleteFuncaoRegistro
};
