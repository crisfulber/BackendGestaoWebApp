const Dependentes = require('../models/Dependentes');

const getDependentes = async (req, res) => {
  try {
    const dependentes = await Dependentes.findAll();
    res.json(dependentes);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getDependentesById = async (req, res) => {
  try {
    const { id } = req.params;
    const dependentes = await Dependentes.findOne({ where: { iddependentes: id } }); 
    if (dependentes) {
      res.status(200).json(dependentes); 
    } else {
      res.status(404).send('Registro não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createDependentes = async (req, res) => {
  try {
    const dependentes = await Dependentes.create(req.body);
    res.status(201).json(dependentes);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateDependentes = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Dependentes.update(req.body, {
      where: { iddependentes: id }
    });
    if (updated) {
      const updatedDependentes = await Dependentes.findOne({ where: { iddependentes: id } });
      res.status(200).json(updatedDependentes);
    } else {
      res.status(404).send('Dependente não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteDependentes = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Dependentes.destroy({
      where: { iddependentes: id }
    });
    if (deleted) {
      res.status(204).send('Dependente deletado');
    } else {
      res.status(404).send('Dependente não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getDependentes,
  getDependentesById,
  createDependentes,
  updateDependentes,
  deleteDependentes
};
