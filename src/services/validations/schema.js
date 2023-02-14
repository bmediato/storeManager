const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const poitnSchema = Joi.string().min(5).required();

const addProduct = Joi.object({
  name: poitnSchema,
});

const addSale = Joi.object({
  productId: idSchema,
  quantity: idSchema,
});

module.exports = {
  idSchema,
  addProduct,
  addSale,
};