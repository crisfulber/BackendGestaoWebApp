const Contato = require('../models/Contato');

const getContato = async (req, res) => {
  try {
    const contato = await Contato.findAll();
    res.json(contato);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getContatoById = async (req, res) => {
  try {
    const { id } = req.params;
    const contato = await Contato.findOne({ where: { idcontato: id } }); 
    if (contato) {
      res.status(200).json(contato); 
    } else {
      res.status(404).send('Contato não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createContato = async (req, res) => {
  try {
    const contato = await Contato.create(req.body);
    res.status(201).json(contato);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateContato = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Contato.update(req.body, {
      where: { idcontato: id }
    });
    if (updated) {
      const updatedContato = await Contato.findOne({ where: { idcontato: id } });
      res.status(200).json(updatedContato);
    } else {
      res.status(404).send('Contato não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteContato = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Contato.destroy({
      where: { idcontato: id }
    });
    if (deleted) {
      res.status(204).send('Contato deletado');
    } else {
      res.status(404).send('Contato não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getContato,
  getContatoById,
  createContato,
  updateContato,
  deleteContato
};
