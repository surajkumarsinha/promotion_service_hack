const repository = require('../repositories/index');

const create_user = async (user) => {
  try {
    const user_ref = await repository.create_user(user);
    return user_ref;
  } catch (error) {
    throw error;
  }
};

const get_user_points = async (user_id) => {
  try {
    const user = await repository.get_user(user_id);
    if (user) {
      const point = await repository.get_user_point(user_id);
      return point;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create_user,
  get_user_points
}