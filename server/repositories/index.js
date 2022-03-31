let user_repository,
  category_repository,
  promotion_repository,
  user_reward_repository,
  point_repository,
  point_transaction_repository;

if (process.env.DB_TYPE == 'pg') {
  user_repository = require('./pg/user_repository');
  category_repository = require('./pg/category_repository');
  promotion_repository = require('./pg/promotion_repository');
  user_reward_repository = require('./pg/user_reward_repository');
  point_repository = require('./pg/point_repository');
  point_transaction_repository = require('./pg/point_transaction_repository');
} else {
  user_repository = require('./pg/user_repository');
  category_repository = require('./pg/category_repository');
  promotion_repository = require('./pg/promotion_repository');
  user_reward_repository = require('./pg/user_reward_repository');
  point_repository = require('./pg/point_repository');
  point_transaction_repository = require('./pg/point_transaction_repository');
}


const repositoryInterface = {
  // User Repo
  create_user: user_repository.create_user,
  get_user: user_repository.get_user,

  // Category Repo
  create_category: category_repository.create_category,
  update_category: category_repository.update_category,
  delete_category: category_repository.delete_category,
  get_category: category_repository.get_category,

  // Promotion Repo
  create_promotion: promotion_repository.create_promotion,
  get_promotion: promotion_repository.get_promotion,
  get_all_promotion: promotion_repository.get_all_promotion,

  // UserReward Repo
  create_user_reward: user_reward_repository.create_user_reward,
  get_user_reward: user_reward_repository.get_user_reward,
  get_user_reward_with_promotion_id: user_reward_repository.get_user_reward_with_promotion_id,
  get_promotion_id_from_user_reward: user_reward_repository.get_promotion_id_from_user_reward,
  update_user_reward_count: user_reward_repository.update_user_reward_count,

  // UserPoint Repo
  update_user_point: point_repository.update_user_point,
  create_user_point: point_repository.create_user_point,
  get_user_point: point_repository.get_user_point,

  // PointTransaction Repo
  create_transaction: point_transaction_repository.create_transaction,
  fetch_all_transaction: point_transaction_repository.fetch_all_transaction,
}

module.exports = repositoryInterface;