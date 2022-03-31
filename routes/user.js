const express = require('express');
const userController = require('../server/controllers/user_controller');
const {
  validateUserCreation,
  validateUserPointRetrieveal
} = require('../server/middlewares/validators/user_validators');

const router = express.Router();

router.post('/', validateUserCreation, userController.createUser);
router.post('/points', validateUserPointRetrieveal, userController.get_user_points);
router.post('/rewards', userController.get_user_rewards);

module.exports = router;