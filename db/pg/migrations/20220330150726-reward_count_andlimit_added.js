'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('UserRewards', 'reward_count', {
        type: Sequelize.INTEGER,
        defaultValue: 1
      }),
      queryInterface.addColumn('UserRewards', 'reward_limit', {
        type: Sequelize.INTEGER,
        defaultValue: 1
      })
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('UserRewards', 'reward_count'),
      queryInterface.removeColumn('UserRewards', 'reward_limit')
    ]);
  }
};
