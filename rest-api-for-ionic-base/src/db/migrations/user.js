'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up(queryInterface, Sequelize) {
  await queryInterface.createTable('Users', {
   id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
   },
   email: { type: Sequelize.STRING, allowNull: false, unique: true },
   password: { type: Sequelize.STRING, allowNull: false },
   name: { type: Sequelize.STRING, allowNull: false },
   phoneNumber: { type: Sequelize.STRING, allowNull: false },
   gender: { type: Sequelize.STRING },
   address: { type: Sequelize.STRING },
   avatarUrl: { type: Sequelize.STRING },
   role: { type: Sequelize.STRING, allowNull: false },

   createdAt: { allowNull: false, type: Sequelize.DATE },
   updatedAt: { allowNull: false, type: Sequelize.DATE },
  });
 },
 async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Users');
 },
};
