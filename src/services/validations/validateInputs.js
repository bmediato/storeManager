const { idSchema, addProduct, addSale } = require('./schema');

const validateId = (id) => {
  const { error } = idSchema.validate(id);

  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };

  return { type: null, message: '' };
};

const validateProduct = (name) => {
  const { error } = addProduct.validate({ name });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

const validateSale = (productId, quantity) => {
  const { error } = addSale.validate({ productId, quantity });

  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateProduct,
  validateSale,
};