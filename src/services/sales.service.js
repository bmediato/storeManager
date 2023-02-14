const { salesModel } = require('../models');
const schema = require('./validations/validateInputs');

const getAll = async () => {
  const sale = await salesModel.getAll();
  
  return { type: null, message: sale };
};

const getById = async (saleId) => {
  const error = schema.validateId(saleId);
  if (error.type) return error;

  const sale = await salesModel.getById(saleId);
  if (sale.length === 0) return { message: 'Sale not found' };

  return sale;
};

// const createSales = async () => {
//   const sale = await salesModel.insertSales();
  
//   if(!sale) return {}
  
// };

// const createSalesProduct = async (productId, quantity) => {
//   const error = schema.validateSale(productId, quantity);
//   if (error.type) return error;

// }

module.exports = {
  getAll,
  getById,
};