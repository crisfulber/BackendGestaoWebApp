const HorasExtras = require('../models/HorasExtras');

const getHorasExtras = async (req, res) => {
  try {
    const horasExtras = await HorasExtras.findAll();
    res.json(horasExtras);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getHorasExtrasById = async (req, res) => {
  try {
    const { id } = req.params;
    const horasExtras = await HorasExtras.findOne({ where: { idhorasextras: id } }); 
    if (horasExtras) {
      res.status(200).json(horasExtras); 
    } else {
      res.status(404).send('Registro não encontrado'); 
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createHorasExtras = async (req, res) => {
  try {
    const horasExtras = await HorasExtras.create(req.body);
    res.status(201).json(horasExtras);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateHorasExtras = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await HorasExtras.update(req.body, {
      where: { idhorasextras: id }
    });
    if (updated) {
      const updatedHorasExtras = await HorasExtras.findOne({ where: { idhorasextras: id } });
      res.status(200).json(updatedHorasExtras);
    } else {
      res.status(404).send('Horas Extras não encontradas');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteHorasExtras = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await HorasExtras.destroy({
      where: { idhorasextras: id }
    });
    if (deleted) {
      res.status(204).send('Horas Extras deletadas');
    } else {
      res.status(404).send('Horas Extras não encontradas');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getHorasExtras,
  getHorasExtrasById,
  createHorasExtras,
  updateHorasExtras,
  deleteHorasExtras
};
