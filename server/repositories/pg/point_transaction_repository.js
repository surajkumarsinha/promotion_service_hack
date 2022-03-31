const Sequelize = require('sequelize');
const User = require('../../models/pg/index').User;
const PointTransaction = require('../../models/pg/index').PointTransaction;
const exception = require('../../../exceptions/exception');
const { logger } = require('../../../utils/logger');
const { log_level } = require('../../../utils/enums/generic');

const pointTransactionRepository = {

  async create_transaction(user_instance, point_value, title, transaction_type) {
    try {
      const transaction_ref = await PointTransaction.create({
        transaction_title: title,
        transaction_type,
        point_value,
      });
      await transaction_ref.setUser(user_instance);
      // await transaction_ref.setPromotion(promotion_instance);
      return transaction_ref;
    } catch (error) {
      logger(
        error.message,
        'create_transaction',
        'pointTransactionRepository',
        log_level.ERR
      );
      throw new exception.DbPersistenceException('PointTransactions', error.message);
    }
  },

  async fetch_all_transaction(user_id, size = 10, offset = 0) {
    try {
      const transaction_list = await PointTransaction.findAll({
        where: {
          UserId: user_id
        },
        limit: size,
        offset: offset,
        include: [
          {
            model: User
          },
        ],
        order: [
          ['createdAt', 'DESC']
        ]
      });
      return transaction_list;
    } catch (error) {
      logger(
        error.message,
        'fetch_all_transaction',
        'pointTransactionRepository',
        log_level.ERR
      );
      throw new exception.DbFetchException('PointTransactions', error.message);
    }
  }

};

module.exports = pointTransactionRepository;