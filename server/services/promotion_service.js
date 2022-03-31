const repository = require('../repositories/index');
const enums = require('../../utils/enums/generic');
const app_constant = require('../../config/app_constant');
const { DefaultException } = require('../../exceptions/exception');
const { log_level } = require('../../utils/enums/generic');
const { logger } = require('../../utils/logger');

const create_promotion = async (promotion) => {
  try {
    const promotion_ref = await repository.create_promotion(promotion);
    logger(
      'promotion persisted',
      'create_promotion',
      'promotion_service',
      log_level.APP_LOG
    );
    return promotion_ref;
  } catch (error) {
    logger(
      error.message,
      'create_promotion',
      'promotion_service',
      log_level.ERR
    );
    throw error;
  }
};

const complete_promotion = async (reward) => {
  try {
    let reward_ref = await repository.get_user_reward_with_promotion_id(
      reward.promotion_id,
      reward.user_id
    );

    if (reward_ref &&
      reward_ref.reward_count >= reward_ref.reward_limit) {
      return null;
    } else if (reward_ref) {
      reward_ref = await repository.update_user_reward_count(reward_ref, 1);
    } else {
      reward_ref = await repository.create_user_reward(reward);
    }

    const promotion_ref = await reward_ref.getPromotion();
    const user_ref = await reward_ref.getUser();

    const user_point = await repository.get_user_point(reward.user_id);
    let updated_user_points;

    if (user_point) {
      updated_user_points = await repository.update_user_point(
        user_point,
        promotion_ref.point_value,
        enums.point_update_type.ADD
      );
    } else {
      updated_user_points = await repository.create_user_point(
        reward.user_id,
        promotion_ref.point_type,
        promotion_ref.point_value,
      );
    }

    // Add Transaction
    await repository.create_transaction(
      user_ref,
      promotion_ref.point_value,
      promotion_ref.title,
      app_constant.transaction_type.REWARD,
    );

    return {
      reward_ref,
      updated_user_points
    };
  } catch (error) {
    logger(
      error.message,
      'complete_promotion',
      'promotion_service',
      log_level.ERR
    );
    throw error;
  }
};

const get_promotion = async (user_id = null) => {
  try {
    let claimed_promotion_list = [];
    if (user_id) {
      claimed_promotion_list = await repository
        .get_promotion_id_from_user_reward(user_id);
    }

    let claimed_list = claimed_promotion_list.map(obj => obj.PromotionId);

    const promotion_list = await repository.get_promotion(
      user_id,
      claimed_list
    );
    return promotion_list;
  } catch (error) {
    logger(
      error.message,
      'get_promotion',
      'promotion_service',
      log_level.ERR
    );
    throw error;
  }
};

const get_user_reward = async (user_id, size = app_constant.REWARD_SIZE) => {
  try {
    const user_reward_list = await repository.get_user_reward(user_id, size);
    return user_reward_list;
  } catch (error) {
    throw error;
  }
};

const redeem_points = async (user_id, point_value, title) => {
  try {
    const user_point_ref = await repository.get_user_point(user_id);
    if (user_point_ref == null || user_point_ref.point_value < point_value)
      throw new DefaultException('Insufficient Funds with user');

    const points = await repository.update_user_point(
      user_point_ref, point_value,
      enums.point_update_type.SUBTRACT,
    );

    const user_ref = await user_point_ref.getUser();

    await repository.create_transaction(
      user_ref,
      point_value,
      title,
      app_constant.transaction_type.REDEEM
    );

    return points;
  } catch (error) {
    throw error;
  }
}

const get_transaction_list = async (user_id) => {
  try {
    const transaction_list = await repository.fetch_all_transaction(user_id);
    return transaction_list;
  } catch (error) {
    logger(
      error.message,
      'get_transaction_list',
      'promotion_service',
      log_level.ERR
    );
    throw error;
  }
}


const get_promotion_v2 = async (user_id = null) => {
  try {
    let claimed_promotion_list = [];
    if (user_id) {
      claimed_promotion_list = await repository
        .get_promotion_id_from_user_reward(user_id);
    }

    let claimed_list = claimed_promotion_list.map(obj => obj.PromotionId);

    const promotion_list = await repository.get_promotion(
      user_id,
      claimed_list
    );
    return promotion_list;
  } catch (error) {
    logger(
      error.message,
      'get_promotion',
      'promotion_service',
      log_level.ERR
    );
    throw error;
  }
};

const get_all_promotion = async () => {
  try {
    const promotion_list = await repository.get_all_promotion();
    return promotion_list;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  create_promotion,
  complete_promotion,
  get_promotion,
  get_user_reward,
  redeem_points,
  get_transaction_list,
  get_all_promotion
};
