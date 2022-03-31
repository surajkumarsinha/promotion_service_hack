'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
    }
  };
  User.init({

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },

    jhh_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    dob: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    currency: {
      type: DataTypes.STRING,
      allowNull: false
    }


  },

    {
      sequelize,
      modelName: 'User',
    });


  return User;
};