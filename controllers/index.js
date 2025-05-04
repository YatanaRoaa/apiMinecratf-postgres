// controllers/index.js
const models = require("../database/models");

// CREATE
const createBlock = async (req, res) => {
  try {
    const bloque = await models.Block.create(req.body);
    return res.status(201).json({ bloque });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// READ ALL
const getAllBlocks = async (req, res) => {
  try {
    const bloques = await models.Block.findAll();
    return res.status(200).json({ bloques });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// UPDATE
const updateBlock = async (req, res) => {
  const { id } = req.params;
  const nuevosDatos = req.body;

  try {
    const [rowsUpdated] = await models.Block.update(nuevosDatos, { where: { id } });
    if (rowsUpdated === 0) {
      return res.status(404).json({ message: "Bloque no encontrado" });
    }
    const bloqueActualizado = await models.Block.findByPk(id);
    return res.status(200).json({ bloque: bloqueActualizado });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// DELETE
const deleteBlock = async (req, res) => {
  const { id } = req.params;
  try {
    const rowsDeleted = await models.Block.destroy({ where: { id } });
    if (rowsDeleted === 0) {
      return res.status(404).json({ message: "Bloque no encontrado" });
    }
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createBlock, getAllBlocks, updateBlock, deleteBlock };