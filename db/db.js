const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
    'socialmedia',
    'root',
    '',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;