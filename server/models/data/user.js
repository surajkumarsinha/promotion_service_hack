class User {
  constructor(jhh_id, first_name, last_name, dob, currency = 'INR') {
    this.jhh_id = jhh_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.dob = dob;
    this.currency = currency;
  }
};

module.exports = User;