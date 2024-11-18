// controllers/usuariosController.js
const Usuarios = require('../models/Usuarios');

const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.create(req.body);
    res.status(201).json(usuarios);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateUsuarios = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Usuarios.update(req.body, {
      where: { idusuario: id }
    });
    if (updated) {
      const updatedUsuarios = await Usuarios.findOne({ where: { idusuario: id } });
      res.status(200).json(updatedUsuarios);
    } else {
      res.status(404).send('Usuario não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteUsuarios = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Usuarios.destroy({
      where: { idusuario: id }
    });
    if (deleted) {
      res.status(204).send('Usuario deletado');
    } else {
      res.status(404).send('Usuario não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getUsuarios,
  createUsuarios,
  updateUsuarios,
  deleteUsuarios
};
