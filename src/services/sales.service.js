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

// const createSales = async (sale) => {
//   const sale = await salesModel.insertSales();
  
//   if(!sale) return {}
  
// };

// const createSalesProduct = async (sale, product) => {
//   const error = schema.validateSale(product.productId, product.quantity);
//   if (error.type) return error;

//   const result = await salesModel.createSalesProduct(sale, product);
//   return result;

// }

module.exports = {
  getAll,
  getById,
};