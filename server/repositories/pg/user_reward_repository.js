const Sequelize = require('sequelize');
const { Promotion } = require('../../models/pg/index');
const { UserReward } = require('../../models/pg/index');
const { User } = require('../../models/pg/index');
const exception = require('../../../exceptions/exception');
const { logger } = require('../../../utils/logger');
const { log_level } = require('../../../utils/enums/generic');

const userRewardRepository = {
  async create_user_reward(reward) {
    try {
      const user_ref = await User.findOne({ where: { id: reward.user_id } });
      const promotion_ref = await Promotion.findOne({
        where: { id: reward.promotion_id },
      });

      const user_reward_ref = await UserReward.create(reward);
      await user_reward_ref.setUser(user_ref);
      await user_reward_ref.setPromotion(promotion_ref);
      await user_reward_ref.update({
        reward_limit: promotion_ref.promotion_limit,
      });

      return user_reward_ref;
    } catch (error) {
      logger(
        error.message,
        'create_user_reward',
        'userRewardRepository',
        log_level.ERR
      );
      throw new exception.DbPersistenceException('promotions', error.message);
    }
  },

  async get_user_reward_with_promotion_id(promotion_id, user_id) {
    try {
      const user_reward_ref = await UserReward.findOne({
        where: {
          PromotionId: promotion_id,
          UserId: user_id,
        },
      });
      return user_reward_ref;
    } catch (error) {
      logger(
        error.message,
        'get_user_reward_with_promotion_id',
        'userRewardRepository',
        log_level.ERR
      );
      throw new exception.DbFetchException('user_rewards', error.message);
    }
  },

  async get_user_reward(user_id, size) {
    try {
      const user_reward_ref = await UserReward.findAll({
        limit: size,
        where: { UserId: user_id },
        include: [
          {
            model: Promotion,
          },
        ],
        order: [['createdAt', 'DESC']],
      });
      return user_reward_ref;
    } catch (error) {
      logger(
        error.message,
        'get_user_reward',
        'userRewardRepository',
        log_level.ERR
      );
      throw new exception.DbPersistenceException('user_rewards', error.message);
    }
  },

  async get_promotion_id_from_user_reward(user_id) {
    try {
      const user_reward_ref = await UserReward.findAll({
        where: {
          UserId: user_id,
          reward_count: {
            [Sequelize.Op.gte]: Sequelize.col('reward_limit'),
          },
        },
        attributes: ['PromotionId'],
        raw: true,
      });
      return user_reward_ref;
    } catch (error) {
      logger(
        error.message,
        'get_promotion_id_from_user_reward',
        'userRewardRepository',
        log_level.ERR
      );
      throw new exception.DbFetchException('userRewards', error.message);
    }
  },

  async update_user_reward_count(user_reward_instance, count) {
    try {
      const user_reward_ref = await user_reward_instance.update({
        reward_count: user_reward_instance.reward_count + count,
      });
      return user_reward_ref;
    } catch (error) {
      logger(
        error.message,
        'update_user_reward_count',
        'userRewardRepository',
        log_level.ERR
      );
      throw new exception.DbFetchException('userRewards', error.message);
    }
  },

  async get_promotion_id_from_user_reward_v2(user_id) {
    try {
      const user_reward_ref = await UserReward.findAll({
        where: {
          UserId: user_id,
          reward_count: {
            [Sequelize.Op.gte]: Sequelize.col('reward_limit'),
          },
        },
        attributes: ['PromotionId'],
        raw: true,
      });
      return user_reward_ref;
    } catch (error) {
      logger(
        error.message,
        'get_promotion_id_from_user_reward',
        'userRewardRepository',
        log_level.ERR
      );
      throw new exception.DbFetchException('userRewards', error.message);
    }
  },
};

module.exports = userRewardRepository;
