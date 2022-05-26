'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PCs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CPU: {
        type: Sequelize.STRING
      },
      RAM: {
        type: Sequelize.INTEGER
      },
      OfficeId: {
        type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Offices'
            },
            key: 'id'
          },
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
    await queryInterface.dropTable('PCs');
  }
};