const crypto = require('crypto');
const config = require('../../config/app_config');

const { initVector } = config.crypto_config;
const { algorithm } = config.crypto_config;
const ENCRYPTION_KEY = config.crypto_config.encryption_key;

const ComputeContentHash = async (token) =>
  crypto.createHash('sha256').update(token).digest('base64');

const ComputeContentHashSync = (token) =>
  crypto.createHash('sha256').update(token).digest('base64');

const ComputeSignature = async (stringToSign) => {
  const secret = process.env.COMMUNICATION_SERVICES_ACCESSKEY;
  var key = Buffer.from(secret, 'base64');
  var hash = crypto
    .createHmac('sha256', key)
    .update(stringToSign)
    .digest('base64');
  return hash;
};

const encryptData = (data) => {
  const cipher = crypto.createCipheriv(algorithm, ENCRYPTION_KEY, initVector);
  let encryptedData = cipher.update(data, 'utf-8', 'hex');
  encryptedData += cipher.final('hex');
  return encryptedData;
};

const decryptData = (encryptedData) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    ENCRYPTION_KEY,
    initVector
  );
  let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
  decryptedData += decipher.final('utf8');
  return decryptedData;
};

const decodeToken = (token) => {
  var utf8encoded = Buffer.from(token, 'base64').toString('utf8');
  return utf8encoded;
};

const createCheckSum = (body, secret) =>
  crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(body))
    .digest('hex');

module.exports = {
  ComputeContentHash,
  ComputeSignature,
  encryptData,
  decryptData,
  decodeToken,
  createCheckSum,
  ComputeContentHashSync,
};
