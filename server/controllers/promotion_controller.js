const promotionService = require('../services/promotion_service');

const createPromotion = async (req, res) => {
  const promotion = res.locals.promotion;
  try {
    const promotion_ref = await promotionService.create_promotion(promotion);
    return res.json(promotion_ref);
  } catch (error) {
    console.log(error.message);
    return res.status(error.status).json({
      error: error.message
    });
  }
};

const redeemPromotion = async (req, res) => {
  const reward = res.locals.reward;
  try {
    reward_ref = await promotionService.complete_promotion(reward);
    if (reward_ref === null) {
      return res.status(400).json({
        reward: 'Cannot redeem for the same promotion again'
      });
    } else {
      return res.status(200).json({
        reward: reward_ref
      });
    }
  } catch (error) {
    return res.status(error.status).json({
      error: error.message
    });
  }
}

const getPromotion = async (req, res) => {

  try {
    const user_id = req.body.user_id;
    const promotions = await promotionService.get_promotion(user_id);
    return res.status(200).json({ promotions });
  } catch (error) {
    return res.status(error.status).json({
      error: error.message
    });
  }
}

const getBasePromotion = async (req, res) => {

  try {
    const promotions = await promotionService.get_promotion();
    return res.status(200).json({ promotions });
  } catch (error) {
    return res.status(error.status).json({
      error: error.message
    });
  }
}

const getReward = async (req, res) => {
  try {
    const { user_id, size } = req.body;
    if (user_id == null) {
      return res.status(423).json({
        error: 'user_id is required'
      });
    } else {
      const rewards = await promotionService.get_user_reward(user_id, size);
      return res.status(200).json({ rewards })
    }
  } catch (error) {
    return res.status(error.status).json({
      error: error.message
    });
  }
};

const redeemPoints = async (req, res) => {
  try {
    const { user_id, point_value, title } = req.body;
    if (user_id == null || point_value == null) {
      return res.status(423).json({
        error: 'user_id and point_value and title are required'
      });
    } else {
      const points = await promotionService
        .redeem_points(user_id, point_value, title);

      return res.status(200).json({ points })
    }
  } catch (error) {
    return res.status(error.status).json({
      error: error.message
    });
  }
};


const fetchTransactionList = async (req, res) => {
  try {
    const { user_id } = req.body;
    if (user_id == null)
      return res.status(423).json({
        error: 'user_id is required'
      });
    const transaction_list = await promotionService.get_transaction_list(user_id);
    return res.json(transaction_list).status(200);
  } catch (error) {
    return res.status(error.status).json({
      error: error.message
    });
  }
};

const getAllPromotion = async (req, res) => {
  try {
    const promotion_list = await promotionService.get_all_promotion();
    return res.json(promotion_list).status(200);
  } catch (error) {
    return res.status(error.status).json({
      error: error.message
    });
  }
}

module.exports = {
  createPromotion,
  redeemPromotion,
  getBasePromotion,
  getPromotion,
  getReward,
  redeemPoints,
  fetchTransactionList,
  getAllPromotion
};
