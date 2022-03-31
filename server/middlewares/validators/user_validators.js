const { check, validationResult } = require('express-validator');
const app_constant = require('../../../config/app_constant');
const User = require('../../models/data/user');

exports.validateUserCreation = [

  check('first_name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('First name cannot be empty!')
    .bail()
    .isLength({ min: 2 })
    .withMessage('Minimum 2 characters required!')
    .bail(),

  check('jhh_id')
    .trim()
    .not()
    .isEmpty()
    .toUpperCase()
    .withMessage('Jhh_id is required')
    .bail(),

  check('dob')
    .trim()
    .not()
    .isEmpty()
    .toUpperCase()
    .withMessage('Dob is required')
    .bail(),

  check('currency')
    .trim()
    .toUpperCase(),

  check('last_name')
    .trim()
    .optional(),


  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(app_constant.VALIDATION_ERROR_CODE).json({ errors: errors.array() });
    const {
      jhh_id,
      first_name,
      last_name,
      dob
    } = req.body;
    res.locals.user = new User(jhh_id, first_name, last_name, dob);
    next();
  },
];



exports.validateUserPointRetrieveal = [

  check('user_id')
    .not()
    .isEmpty()
    .withMessage('user_id is required')
    .bail()
    .isInt()
    .withMessage('user_id has to an integer')
    .bail(),


  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(app_constant.VALIDATION_ERROR_CODE).json({ errors: errors.array() });
    next();
  },
];



