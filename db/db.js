const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
    'socialmedia',
    'root',
    '',
    {
        dialect: 'mysql',
        host: 'localhost',
        define: {
            freezeTableName: true,
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        }
    }
);

module.exports = sequelize;