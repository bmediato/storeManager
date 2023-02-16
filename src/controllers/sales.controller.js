const { salesService } = require('../services');
const errorMap = require('../utils/errorMap');

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
  const { message, type } = await salesService.createSalesProduct(req.body);

  if (type) return res.status(errorMap.mapError(type)).json(message);
  
  return res.status(201).json(message);
};

module.exports = {
  getAll,
  getById,
  createSales,
};