// controllers/funcaoEmpresaController.js
const FuncaoEmpresa = require('../models/FuncaoEmpresa');

const getFuncaoEmpresa = async (req, res) => {
  try {
    const funcaoEmpresa = await FuncaoEmpresa.findAll();
    res.json(funcaoEmpresa);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createFuncaoEmpresa = async (req, res) => {
  try {
    const funcaoEmpresa = await FuncaoEmpresa.create(req.body);
    res.status(201).json(funcaoEmpresa);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateFuncaoEmpresa = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await FuncaoEmpresa.update(req.body, {
      where: { idfuncao_empresa: id }
    });
    if (updated) {
      const updatedFuncaoEmpresa = await FuncaoEmpresa.findOne({ where: { idfuncao_empresa: id } });
      res.status(200).json(updatedFuncaoEmpresa);
    } else {
      res.status(404).send('Funcao-Empresa não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteFuncaoEmpresa = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await FuncaoEmpresa.destroy({
      where: { idfuncao_empresa: id }
    });
    if (deleted) {
      res.status(204).send('Funcao-Empresa deletada');
    } else {
      res.status(404).send('Funcao-Empresa não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getFuncaoEmpresa,
  createFuncaoEmpresa,
  updateFuncaoEmpresa,
  deleteFuncaoEmpresa
};
