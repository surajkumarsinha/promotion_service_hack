const local = {
  crypto_config: {
    algorithm: "aes-256-cbc",
    initVector: process.env.INIT_VECTOR,
    encryption_key: process.env.ENCRYPTION_KEY,
  },
  morgan_log_level: 'dev',
};

const development = {
  crypto_config: {
    algorithm: "aes-256-cbc",
    initVector: process.env.INIT_VECTOR,
    encryption_key: process.env.ENCRYPTION_KEY,
  },
  morgan_log_level: 'dev',
};

const SIT = {
  crypto_config: {
    algorithm: "aes-256-cbc",
    initVector: process.env.INIT_VECTOR,
    encryption_key: process.env.ENCRYPTION_KEY,
  },
  morgan_log_level: ':method :url :status :res[content-length] - :response-time ms',
};

const replica = {
  crypto_config: {
    algorithm: "aes-256-cbc",
    initVector: process.env.INIT_VECTOR,
    encryption_key: process.env.ENCRYPTION_KEY,
  },
  morgan_log_level: ':method :url :status :res[content-length] - :response-time ms',
};

const production = {
  crypto_config: {
    algorithm: "aes-256-cbc",
    initVector: process.env.INIT_VECTOR,
    encryption_key: process.env.ENCRYPTION_KEY,
  },
  morgan_log_level: ':method :url :status :res[content-length] - :response-time ms'
};



if (process.env.ENV == 'PROD') {
  module.exports = production;
} else if (process.env.ENV == 'SIT') {
  module.exports = SIT;
} else if (process.env.ENV == 'development') {
  module.exports = development;
} else if (process.env.ENV == 'REPLICA') {
  module.exports = replica
} else {
  module.exports = local
}