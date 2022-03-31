'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },

      last_name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },

      jhh_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      dob: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      currency: {
        type: Sequelize.STRING,
        allowNull: false
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
