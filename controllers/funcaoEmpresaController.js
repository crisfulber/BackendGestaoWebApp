const { Unidade, FuncaoEmpresa } = require('../models');

const getFuncaoEmpresa = async (req, res) => {
  try {
    const funcaoEmpresa = await FuncaoEmpresa.findAll({
      include: [{
        model: Unidade,
        attributes: ['nome'] 
      }]
    });
    res.json(funcaoEmpresa);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getFuncaoEmpresaById = async (req, res) => {
  try {
    const { id } = req.params;
    const funcaoEmpresa = await FuncaoEmpresa.findOne({ 
      where: { idfuncaoempresa: id },
      include: [{
        model: Unidade,
        attributes: ['nome'] 
      }] 
    }); 
    if (funcaoEmpresa) {
      res.status(200).json(funcaoEmpresa); 
    } else {
      res.status(404).send('Registro não encontrado'); 
    }
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
      where: { idfuncaoempresa: id }
    });
    if (updated) {
      const updatedFuncaoEmpresa = await FuncaoEmpresa.findOne({ where: { idfuncaoempresa: id } });
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
      where: { idfuncaoempresa: id }
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
  getFuncaoEmpresaById,
  createFuncaoEmpresa,
  updateFuncaoEmpresa,
  deleteFuncaoEmpresa
};
