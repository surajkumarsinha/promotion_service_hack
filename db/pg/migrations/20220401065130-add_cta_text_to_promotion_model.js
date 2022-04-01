'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('Promotions', 'cta_text', {
        type: Sequelize.STRING,
        defaultValue: "add event"
      })
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Promotions', 'cta_text')
    ]);
  }
};