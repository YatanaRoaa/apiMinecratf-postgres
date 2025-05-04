
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blocks', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      bloque: { type: Sequelize.STRING },
      tipoBloque: { type: Sequelize.STRING },
      bioma: { type: Sequelize.STRING },
      uso: { type: Sequelize.TEXT },
      crafteo: { type: Sequelize.TEXT },
      herramienta: { type: Sequelize.STRING },
      color: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('blocks');
  }
};