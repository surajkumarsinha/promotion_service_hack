class UserReward {
  constructor(user_id, promotion_id, point_accumulated) {
    this.user_id = user_id;
    this.promotion_id = promotion_id;
    this.point_accumulated = point_accumulated;
  }
};

module.exports = UserReward;