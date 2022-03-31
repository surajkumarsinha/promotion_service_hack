const userService = require('../services/user_service');

const createUser = async (req, res) => {
  const user = res.locals.user;
  try {
    const user_ref = await userService.create_user(user);
    return res.send(user_ref);
  } catch (error) {
    console.log(error.message);
    return res.status(error.status).json(error.message);
  }
};

const get_user_points = async (req, res) => {
  try {
    const { user_id } = req.body;
    console.log(user_id);
    const points = await userService.get_user_points(user_id);
    return res.status(200).json({ point: points });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};

const get_user_rewards = async (req, res) => {
  res.send('hello world');
};

module.exports = {
  get_user_points,
  get_user_rewards,
  createUser
};
