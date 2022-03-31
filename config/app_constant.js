const app_constant = {

  MIDDLEMAN_CLIENT: "JHH_CORE_MIDDLEMEN",

  BAD_REQUEST_CODE: 400,
  NOT_FOUND_CODE: 404,
  INVALID_AUTH_CODE: 422,
  VALIDATION_ERROR_CODE: 423,
  INVALID_CHECKSUM_CODE: 424,
  DB_EXCEPTION_CODE: 425,
  IDENTITY_ERROR_CODE: 426,
  RATE_LIMIT_EXCEEDED_CODE: 429,

  point_type: {
    1: {
      currency: 'INR',
      point_value: 1
    }
  },

  REWARD_SIZE: 15,

  transaction_type: {
    REDEEM: 'REDEEM',
    REWARD: 'REWARD'
  },

};

module.exports = app_constant;