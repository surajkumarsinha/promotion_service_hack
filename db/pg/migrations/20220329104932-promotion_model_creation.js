'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Promotions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: true,
        unique: false
      },

      promotion_type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },

      start_date: {
        type: Sequelize.DATE,
        allowNull: true
      },

      expiry_date: {
        type: Sequelize.DATE,
        allowNull: true
      },

      point_value: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      point_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },

      CategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories', // name of Source model
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('Promotions');
  }
};
