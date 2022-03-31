const log_level = {
  APP_LOG: 'APPLICATION LOG',
  ERR: 'ERROR',
};

const promotion_type = {
  REWARD: 'REWARD',
  AWARD: 'AWARD',
};

const point_type = {
  1: {
    currency: 'INR',
    point_value: 1
  }
};

const point_update_type = {
  ADD: 0,
  SUBTRACT: 1
};

Object.freeze([
  log_level,
  promotion_type,
  point_type,
  point_update_type
]);

module.exports = {
  log_level,
  promotion_type,
  point_type,
  point_update_type
};

