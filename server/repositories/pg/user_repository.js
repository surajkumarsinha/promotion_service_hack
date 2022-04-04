const { User } = require('../../models/pg/index');
const exception = require('../../../exceptions/exception');

const userRepository = {
  async create_user(user) {
    try {
      const user_ref = await User.create(user);
      return user_ref;
    } catch (error) {
      throw new exception.DbPersistenceException('users', error.message);
    }
  },

  async get_user(user_id) {
    try {
      const user_ref = await User.findByPk(user_id);
      return user_ref;
    } catch (error) {
      throw new exception.DbPersistenceException('users', error.message);
    }
  },
};

module.exports = userRepository;
