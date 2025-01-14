// controllers/setoresController.js
const { Unidade, Setores } = require('../models');

const getSetores = async (req, res) => {
  try {
    const setores = await Setores.findAll({
      include: [{
        model: Unidade,
        attributes: ['nome'] // se quiser filtrar colunas
      }]
    });
    res.json(setores);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Obter um setor pelo ID
const getSetoresById = async (req, res) => {
  try {
    const { id } = req.params;
    const setor = await Setores.findOne({ 
      where: { idsetores: id },
      include: [{
        model: Unidade,
        attributes: ['nome'] // se quiser filtrar colunas
      }]
    }); // Busca o setor pelo ID
    if (setor) {
      res.status(200).json(setor); // Retorna o setor encontrado
    } else {
      res.status(404).send('Setor não encontrado'); // Retorna 404 se não encontrar
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Criar um novo setor
const createSetores = async (req, res) => {
  try {
    const setor = await Setores.create(req.body); // Cria um novo setor
    res.status(201).json(setor); // Retorna o setor criado
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Atualizar um setor existente
const updateSetores = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Setores.update(req.body, {
      where: { idsetores: id } // Atualiza com base no ID
    });
    if (updated) {
      const updatedSetores = await Setores.findOne({ where: { idsetores: id } });
      res.status(200).json(updatedSetores); // Retorna o setor atualizado
    } else {
      res.status(404).send('Setor não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Deletar um setor existente
const deleteSetores = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Setores.destroy({
      where: { idsetores: id } // Remove com base no ID
    });
    if (deleted) {
      res.status(204).send('Setor deletado');
    } else {
      res.status(404).send('Setor não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Exporta os métodos
module.exports = {
  getSetores,
  getSetoresById,
  createSetores,
  updateSetores,
  deleteSetores
};
