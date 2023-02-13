const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const poitnSchema = Joi.string().min(3).required();

const addProduct = Joi.object({
  name: poitnSchema,
});

module.exports = {
  idSchema,
  addProduct,
};