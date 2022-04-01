'use strict';
const enums = require('../../../utils/enums/generic');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Promotion extends Model {

    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: {
          allowNull: true
        }
      });
    }
  };
  Promotion.init({

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: false
    },

    promotion_type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      defaultValue: enums.promotion_type.AWARD
    },

    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },

    expiry_date: {
      type: DataTypes.DATE,
      allowNull: false
    },

    point_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },

    point_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },

    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    promotion_limit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },

    cta_text: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'add event'
    },

  },

    {
      sequelize,
      modelName: 'Promotion',
    });


  return Promotion;
};
