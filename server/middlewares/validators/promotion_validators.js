const { check, validationResult } = require('express-validator');
const app_constant = require('../../../config/app_constant');
const Promotion = require('../../models/data/promotion');
const UserReward = require('../../models/data/userReward');

exports.validatePromotionCreation = [

  check('category_id')
    .not()
    .isEmpty()
    .withMessage('Category_id cannot be empty!')
    .bail()
    .isInt()
    .withMessage('Category_id has to be an integer')
    .bail(),

  check('title')
    .trim()
    .not()
    .isEmpty()
    .withMessage('title is required')
    .bail()
    .isString()
    .toUpperCase()
    .withMessage('title has to be a string')
    .bail(),

  check('description')
    .optional(),

  check('promotion_type')
    .trim()
    .not()
    .isEmpty()
    .withMessage('title is required')
    .bail()
    .toUpperCase(),

  check('point_value')
    .not()
    .isEmpty()
    .withMessage('point_value is required')
    .bail()
    .isInt()
    .withMessage('point_value has to a number')
    .bail(),

  check('point_type')
    .optional(),

  check('start_date')
    .not()
    .isEmpty()
    .withMessage('Start date cannot be empty')
    .bail(),

  check('expiry_date')
    .not()
    .isEmpty()
    .withMessage('Expiry date cannot be empty')
    .bail(),


  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(app_constant.VALIDATION_ERROR_CODE).json({ errors: errors.array() });
    const {
      category_id,
      title,
      promotion_type,
      point_value,
      point_type,
      description,
      start_date,
      expiry_date,
      promotion_limit,
    } = req.body;
    res.locals.promotion = new Promotion(
      category_id,
      title,
      promotion_type,
      point_value,
      point_type,
      description,
      start_date,
      expiry_date,
      promotion_limit
    );
    next();
  },
];



exports.validateUserRewardCreation = [

  check('user_id')
    .not()
    .isEmpty()
    .withMessage('User_id cannot be empty!')
    .bail()
    .isInt()
    .withMessage('User_id has to be an integer')
    .bail(),

  check('promotion_id')
    .not()
    .isEmpty()
    .withMessage('promotion_id cannot be empty!')
    .bail()
    .isInt()
    .withMessage('promotion_id has to be an integer')
    .bail(),

  check('point_accumulated')
    .not()
    .isEmpty()
    .withMessage('point_accumulated is required')
    .bail()
    .isInt()
    .withMessage('point_accumulated has to a number')
    .bail(),


  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(app_constant.VALIDATION_ERROR_CODE).json({ errors: errors.array() });
    const {
      user_id,
      point_accumulated,
      promotion_id,
    } = req.body;
    res.locals.reward = new UserReward(
      user_id,
      promotion_id,
      point_accumulated,
    );
    next();
  },
];


exports.validateUserRewardFetch = [

  check('user_id')
    .not()
    .isEmpty()
    .withMessage('User_id cannot be empty!')
    .bail()
    .isInt()
    .withMessage('User_id has to be an integer')
    .bail(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(app_constant.VALIDATION_ERROR_CODE).json({ errors: errors.array() });
    next();
  },
];


