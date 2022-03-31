/* eslint-disable max-classes-per-file */
const app_constant = require('../config/app_constant');

class DefaultException extends Error {
  constructor(message, status = app_constant.INVALID_AUTH_CODE) {
    super();
    this.message = message;
    this.status = status;
  }
}

class AuthException extends Error {
  constructor(id, reason) {
    super();
    this.id = id;
    this.message = `Exception in processing ${id}. Reason: ${reason}`;
    this.status = app_constant.INVALID_AUTH_CODE;
  }
}

class DbException extends Error {
  constructor(tableName, reason) {
    super();
    this.tableName = tableName;
    this.message = `Exception in processing ${tableName}. Reason: ${reason}`;
    this.status = app_constant.DB_EXCEPTION_CODE;
  }
}

class DbPersistenceException extends DbException {
  constructor(tableName, reason) {
    super(tableName, reason);
    this.message = `The changes cannot be persisted to ${tableName}. Reason: ${reason}`;
  }
}

class DbFetchException extends DbException {
  constructor(tableName, reason) {
    super(tableName, reason);
    this.message = `The data cannot be fetched from ${tableName}. Reason: ${reason} `;
  }
}

class RateLimitExceedException extends Error {
  constructor() {
    super();
    this.message = 'Rate Limit exceeded';
    this.status = app_constant.RATE_LIMIT_EXCEEDED_CODE;
  }
}

class ServiceUnavailableException extends Error {
  constructor() {
    super();
    this.message = 'Service Unavailable';
    this.status = 503;
  }
}

module.exports = {
  DefaultException,
  AuthException,
  DbException,
  DbPersistenceException,
  DbFetchException,
  RateLimitExceedException,
  ServiceUnavailableException,
};
