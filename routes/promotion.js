const express = require('express');
const promotionController = require('../server/controllers/promotion_controller');
const {
  validatePromotionCreation,
  validateUserRewardCreation,
  validateUserRewardFetch
} = require('../server/middlewares/validators/promotion_validators');

const router = express.Router();

router.post('/', validatePromotionCreation, promotionController.createPromotion);
router.post('/user/list', validateUserRewardFetch, promotionController.getPromotion);
router.post('/base/list', promotionController.getBasePromotion);
router.post('/redeem', validateUserRewardCreation, promotionController.redeemPromotion);
router.post('/reward/list', validateUserRewardFetch, promotionController.getReward);
router.post('/reward/last', validateUserRewardFetch, promotionController.getReward);
router.post('/points/redeem', promotionController.redeemPoints);
router.post('/transaction/list', promotionController.fetchTransactionList);
router.post('/base/list/all', promotionController.getAllPromotion);

module.exports = router;