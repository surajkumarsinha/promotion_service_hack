'use strict';
const enums = require('../../../utils/enums/generic');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PointTransaction extends Model {

    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
        }
      });
      // this.belongsTo(models.Promotion, {
      //   foreignKey: {
      //     allowNull: true
      //   }
      // });
    }
  };
  PointTransaction.init({

    transaction_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    transaction_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    point_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  },

    {
      sequelize,
      modelName: 'PointTransaction',
    });


  return PointTransaction;
};
