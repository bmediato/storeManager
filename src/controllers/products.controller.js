const { productsService } = require('../services');
const errorMap = require('../utils/errorMap');

const getAll = async (_req, res) => {
  const { type, message } = await productsService.getAll();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(id);

  if (product.message) return res.status(404).json(product);

  return res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const product = await productsService.createProduct(name);

 return res.status(201).json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const product = await productsService.updateProduct(id, name);

  if (product.message) return res.status(404).json(product);

  return res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const product = await productsService.deleteProduct(id);
  if (product.message) return res.status(404).json(product);

  return res.status(204).end();
};

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
};
