class Promotion {
  constructor(
    category_id,
    title,
    promotion_type,
    point_value,
    point_type,
    description,
    start_date,
    expiry_date,
    promotion_limit = 1
  ) {
    this.category_id = category_id;
    this.title = title;
    this.promotion_type = promotion_type;
    this.point_value = point_value;
    this.point_type = point_type;
    this.description = description;
    this.start_date = start_date;
    this.expiry_date = expiry_date;
    this.promotion_limit = promotion_limit;
  }
};

module.exports = Promotion;
