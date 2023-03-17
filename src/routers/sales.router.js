const express = require('express');

const { salesController } = require('../controllers');
// const validateQuantity = require('../middlewares/validateQuantityeProduct');

const router = express.Router();

router.get('/', salesController.getAll);
router.get('/:id', salesController.getById);
// router.post('/', validateQuantity, validateProduct, salesController.createSales);

module.exports = router;