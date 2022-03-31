const { check, validationResult } = require('express-validator');
const app_constant = require('../../../config/app_constant');
const Category = require('../../models/data/category');

exports.validateCategoryCreation = [

  check('category_name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Category cannot be empty!')
    .bail()
    .isLength({ min: 2 })
    .withMessage('Minimum 2 characters required!')
    .bail(),

  check('action_url')
    .not()
    .isEmpty()
    .withMessage('Action Url cannot be empty!')
    .bail(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(app_constant.VALIDATION_ERROR_CODE).json({ errors: errors.array() });
    const {
      category_name,
      action_url
    } = req.body;
    res.locals.category = new Category(category_name, action_url);
    next();
  },
];


exports.validateCategoryUpdation = [

  check('category_id')
    .not()
    .isEmpty()
    .withMessage('category_id cannot be empty or null')
    .bail()
    .isInt()
    .withMessage('category_id has to be an integer')
    .bail(),

  check('update_data')
    .not()
    .isEmpty()
    .withMessage('udpate_data cannot be empty or null')
    .bail()
    .isObject()
    .withMessage('udpate_data has to be an object')
    .bail(),

  check('update_data.category_name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Category cannot be empty!')
    .bail()
    .isLength({ min: 2 })
    .withMessage('Minimum 2 characters required!')
    .bail(),

  check('update_data.action_url')
    .not()
    .isEmpty()
    .withMessage('Action Url cannot be empty!')
    .bail(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(app_constant.VALIDATION_ERROR_CODE).json({ errors: errors.array() });
    const {
      category_id,
      update_data
    } = req.body;
    res.locals.updated_category = {
      category_id,
      category_name: update_data.category_name,
      action_url: update_data.action_url
    };
    next();
  },
];



