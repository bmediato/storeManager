const { productsModel } = require('../models');
const schema = require('./validations/validateInputs');

const getAll = async () => {
  const products = await productsModel.getAll();

  return { type: null, message: products };
};

const getById = async (productId) => {
  const error = schema.validateId(productId);
  if (error.type) return error;

  const product = await productsModel.getById(productId);
  if (!product) return { message: 'Product not found' };

  return product;
};

const createProduct = async (name) => {
  const error = schema.validateProduct(name);
  if (error.type) return error;

  const newProductId = await productsModel.insert({ name });
  const newProduct = await productsModel.getById(newProductId);

  return newProduct;
};

module.exports = {
  getAll,
  getById,
  createProduct,
};