'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('PointTransactions', 'transaction_title', {
        type: Sequelize.STRING,
        defaultValue: "Default Transaction title"
      })
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('PointTransactions', 'transaction_title')
    ]);
  }
};