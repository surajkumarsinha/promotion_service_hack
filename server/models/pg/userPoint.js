'use strict';
const enums = require('../../../utils/enums/generic');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserPoint extends Model {

    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
        }
      });
    }
  };
  UserPoint.init({

    point_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },

    point_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  },

    {
      sequelize,
      modelName: 'UserPoint',
    });


  return UserPoint;
};
