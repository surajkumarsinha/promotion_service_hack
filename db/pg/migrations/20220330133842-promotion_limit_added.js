'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('Promotions', 'promotion_limit', {
        type: Sequelize.INTEGER,
        defaultValue: 1
      })
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Promotions', 'promotion_limit')
    ]);
  }
};
