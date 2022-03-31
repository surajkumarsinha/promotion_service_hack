module.exports = {
  "local": {
    "username": "riluser",
    "password": "root123",
    "database": "jhh_promotion_db",
    "host": "127.0.0.1",
    "dialect": "postgresql"
  },

  "development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "port": process.env.DATABASE_PORT,
    "dialect": "postgresql"
  },

  "SIT": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "port": process.env.DATABASE_PORT,
    "dialect": "postgresql"
  },

  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgresql"
  },
  "production": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "port": 5432,
    "dialect": "postgresql"
  }
}