const Sequelize = require('sequelize');
const Promotion = require('../../models/pg/index').Promotion;
const Category = require('../../models/pg/index').Category;
const exception = require('../../../exceptions/exception');
const { logger } = require('../../../utils/logger');
const { log_level } = require('../../../utils/enums/generic');

const promotionRepository = {
  async create_promotion(promotion) {
    try {
      const category_ref = await Category.findOne({ where: { id: promotion.category_id } });
      const promotion_ref = await Promotion.create(promotion);
      console.log(category_ref);
      promotion_ref.setCategory(category_ref);
      return {
        Promotion: promotion_ref,
        Category: category_ref
      };
    } catch (error) {
      logger(
        error.message,
        'create_promotion',
        'promotionRepository',
        log_level.ERR
      );
      throw new exception.DbPersistenceException('promotions', error.message);
    }
  },

  async get_promotion(user_id = null, claimed_promotion_list = []) {
    try {
      const current_time = Date.now();
      if (user_id) {
        const promotionList = await Promotion.findAll({
          where: {
            expiry_date: {
              [Sequelize.Op.gte]: current_time,
            },
            id: {
              [Sequelize.Op.notIn]: claimed_promotion_list
            }
          },
          include: [
            {
              model: Category
            }
          ]
        })
        return promotionList;
      } else {
        const promotionList = await Promotion.findAll({
          where: {
            expiry_date: {
              [Sequelize.Op.gte]: current_time,
            }
          },
          include: [
            {
              model: Category
            }
          ]
        })
        return promotionList;
      }
    } catch (error) {
      logger(
        error.message,
        'get_promotion',
        'promotionRepository',
        log_level.ERR
      );
      throw new exception.DbFetchException('promotions', error.message);
    }
  },

  async get_all_promotion() {
    try {
      const promotion_list = await Promotion.findAll();
      return promotion_list;
    } catch (error) {
      logger(
        error.message,
        'get_all_promotion',
        'promotionRepository',
        log_level.ERR
      );
      throw new exception.DbFetchException('promotions', error.message);
    }
  }
};

module.exports = promotionRepository;