const SetorUsuario = require('../models/SetorUsuario');

const getSetorUsuario = async (req, res) => {
  try {
    const setorUsuario = await SetorUsuario.findAll();
    res.json(setorUsuario);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getSetorUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const setorUsuario = await SetorUsuario.findOne({ where: { idsetorusuario: id } }); 
    if (setorUsuario) {
      res.status(200).json(setorUsuario); 
    } else {
      res.status(404).send('Registro não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createSetorUsuario = async (req, res) => {
  try {
    const setorUsuario = await SetorUsuario.create(req.body);
    res.status(201).json(setorUsuario);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateSetorUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await SetorUsuario.update(req.body, {
      where: { idsetorusuario: id }
    });
    if (updated) {
      const updatedSetorUsuario = await SetorUsuario.findOne({ where: { idsetorusuario: id } });
      res.status(200).json(updatedSetorUsuario);
    } else {
      res.status(404).send('Setor Usuário não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteSetorUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SetorUsuario.destroy({
      where: { idsetorusuario: id }
    });
    if (deleted) {
      res.status(204).send('Setor Usuário deletado');
    } else {
      res.status(404).send('Setor Usuário não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getSetorUsuario,
  getSetorUsuarioById,
  createSetorUsuario,
  updateSetorUsuario,
  deleteSetorUsuario
};
