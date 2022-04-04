const { UserPoint } = require('../../models/pg/index');
const { User } = require('../../models/pg/index');
const exception = require('../../../exceptions/exception');

const PointRepository = {
  async update_user_point(userPoint, point_value, operation) {
    try {
      const oldValue = userPoint.point_value;
      let updatedValue;
      if (operation === 0) {
        updatedValue = oldValue + point_value;
      } else {
        updatedValue = oldValue - point_value;
      }
      await userPoint.update({
        point_value: updatedValue,
      });
      return userPoint;
    } catch (error) {
      throw exception.DbPersistenceException('UserPoints', error.message);
    }
  },

  async create_user_point(user_id, point_type, point_value) {
    try {
      const user_ref = await User.findOne({ where: { id: user_id } });
      const user_point_ref = await UserPoint.create({
        point_type,
        point_value,
      });
      user_point_ref.setUser(user_ref);
      return user_point_ref;
    } catch (error) {
      throw exception.DbPersistenceException('UserPoints', error.message);
    }
  },

  async get_user_point(user_id) {
    try {
      const user_point_ref = await UserPoint.findOne({
        where: { UserId: user_id },
      });
      return user_point_ref;
    } catch (error) {
      throw new exception.DbFetchException('UserPoints', error.message);
    }
  },
};

module.exports = PointRepository;
