const app_constant = require('../../config/app_constant');
const { logger } = require('../../utils/logger');
const { log_level } = require('../../utils/enums/generic');
const { createCheckSum } = require('../services/crypto_service');

const AuthenticationMiddleware = {
  // eslint-disable-next-line consistent-return
  authenticateChecksum(req, res, next) {
    const SECRET = process.env.CHECKSUM_SECRET;
    const ApimKey = process.env.APIM_SUBSCRIPTION_KEY;

    if (!SECRET) {
      logger(
        "Checksum secret doesn't exist",
        'authenticateChecksum',
        'AuthenticationMiddleware',
        log_level.ERR
      );
      return res
        .status(app_constant.INVALID_CHECKSUM_CODE)
        .json({ error: "The checksum secret doesn't exist" });
    }
    const checksum_header = req.headers['x-request-checksum'];
    const client_id = req.headers['client-id'];
    const Ocp_Apim_Subscription = req.headers['ocp-apim-subscription-key'];

    if (!checksum_header) {
      logger(
        'Checksum header not found',
        'authenticateChecksum',
        'AuthenticationMiddleware',
        log_level.ERR
      );
      return res
        .status(app_constant.INVALID_CHECKSUM_CODE)
        .json({ error: "The checksum header doesn't exist" });
    }
    if (client_id !== app_constant.STATE_CHANGE_NOTIFICATION_CLIENT) {
      logger(
        'Client Id header not found',
        'authenticateChecksum',
        'AuthenticationMiddleware',
        log_level.ERR
      );
      return res
        .status(app_constant.INVALID_CHECKSUM_CODE)
        .json({ error: "Client Id header doesn't exist" });
    }


    if (!Ocp_Apim_Subscription || Ocp_Apim_Subscription !== ApimKey) {
      logger(
        'Ocp-Apim-subscription header not found or invalid',
        log_level.ERR,
        'authenticateChecksum',
        'AuthenticationMiddleware'
      );
      return res.status(app_constant.INVALID_CHECKSUM_CODE).json({
        error: "Ocp-Apim-subscription header doesn't exist/incorrect",
      });
    }

    const checksum = createCheckSum(req.body, SECRET);

    if (checksum_header === checksum) {
      logger(
        'Checksum verified',
        'authenticateChecksum',
        'AuthenticationMiddleware',
        log_level.APP_LOG
      );
      next();
    } else {
      logger(
        'Checksum header not same',
        'authenticateChecksum',
        'AuthenticationMiddleware',
        log_level.ERR
      );
      return res
        .status(app_constant.INVALID_CHECKSUM_CODE)
        .json({ error: 'The checksum header not same' });
    }
  },
};





module.exports = AuthenticationMiddleware