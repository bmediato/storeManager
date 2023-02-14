const { salesService } = require('../services');

const getAll = async (_req, res) => {
  const { message } = await salesService.getAll();

  res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getById(id);

  if (sale.message) return res.status(404).json(sale);

  return res.status(200).json(sale);
};

const createSales = async (req, res) => {
  const { productId, quantity } = req.body;

  const sale = await salesService.createSales(productId, quantity);

  return res.status(201).json(sale);
};

module.exports = {
  getAll,
  getById,
  createSales,
};