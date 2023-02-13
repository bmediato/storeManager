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
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: product };
};

module.exports = {
  getAll,
  getById,
};