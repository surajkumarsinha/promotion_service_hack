const express = require('express');
const categoryController = require('../server/controllers/category_controller');
const {
  validateCategoryCreation,
  validateCategoryUpdation
} = require('../server/middlewares/validators/category_validator');

const router = express.Router();

router.post('/', validateCategoryCreation, categoryController.createCategory);
router.post('/update', validateCategoryUpdation, categoryController.updateCategory);
router.delete('/', categoryController.deleteCategory);

module.exports = router;