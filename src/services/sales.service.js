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

const createSalesProduct = async (sale) => {
  const error = schema.validateSale(sale.productId, sale.quantity);
  if (error.type) return error;
  console.log(error.type);

  const validationProductID = await salesModel.getById(sale.productId);
  console.log(validationProductID);
  if (validationProductID.length === 0) {
    return { message: 'Product not found', type: 'PRODUCT_NOT_FOUND' };
  }
    
  const result = await salesModel.insertSales();
  await Promise.all(sale.map(({ productId, quantity }) => salesModel
    .insertSalesProducts(result, productId, quantity)));
  return {
    type: null,
    message: {
      id: result,
      itemsSold: sale,
    },
  };
};

module.exports = {
  getAll,
  getById,
  createSalesProduct,
};