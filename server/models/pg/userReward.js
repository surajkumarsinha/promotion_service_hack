'use strict';
const enums = require('../../../utils/enums/generic');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserReward extends Model {

    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
        }
      });
      this.belongsTo(models.Promotion, {
        foreignKey: {
          allowNull: true
        }
      });
    }
  };
  UserReward.init({

    point_accumulated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },

    reward_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },

    reward_limit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }

  },

    {
      sequelize,
      modelName: 'UserReward',
    });


  return UserReward;
};
