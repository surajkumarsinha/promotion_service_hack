'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      this.hasMany(models.Promotion, {
        foreignKey: {
          allowNull: true
        }
      });
    }
  };
  Category.init({

    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    action_url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

  },

    {
      sequelize,
      modelName: 'Category',
    });


  return Category;
};