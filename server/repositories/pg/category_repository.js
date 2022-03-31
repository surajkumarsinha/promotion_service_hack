const Category = require('../../models/pg/index').Category;
const exception = require('../../../exceptions/exception');
const { logger } = require('../../../utils/logger');
const { log_level } = require('../../../utils/enums/generic');

const categoryRepository = {

  async get_category() {
    try {
      const category_list = await Category.findAll();
      return category_list;
    } catch (error) {
      logger(
        error.message,
        'get_category',
        'categoryRepository',
        log_level.ERR
      );
      throw new exception.DbPersistenceException('categories', error.message);
    }
  },

  async create_category(category) {
    try {
      const category_ref = await Category.create(category);
      return category_ref;
    } catch (error) {
      logger(
        error.message,
        'create_category',
        'categoryRepository',
        log_level.ERR
      );
      throw new exception.DbPersistenceException('categories', error.message);
    }
  },

  async update_category(updated_category) {
    try {
      const category_ref = await Category.findByPk(updated_category.category_id);
      await category_ref.update({
        action_url: updated_category.action_url,
        category_name: updated_category.category_name
      });
      return category_ref;
    } catch (error) {
      logger(
        error.message,
        'update_category',
        'categoryRepository',
        log_level.ERR
      );
      throw new exception.DbPersistenceException('categories', error.message);
    }
  },

  async delete_category(category_id) {
    try {
      const category_ref = await Category.findByPk(category_id);
      await category_ref.destroy();
      return;
    } catch (error) {
      logger(
        error.message,
        'delete_category',
        'categoryRepository',
        log_level.ERR
      );
      throw new exception.DbPersistenceException('categories', error.message);
    }
  },
};

module.exports = categoryRepository;