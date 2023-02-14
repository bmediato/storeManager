const express = require('express');

const { productsController } = require('../controllers');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', productsController.getAll);

router.get('/:id', productsController.getById);

router.post('/', validateName, productsController.createProduct);

router.put('/:id', validateName, productsController.updateProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;