const { Sequelize, DataTypes } = require('sequelize');
const  sequelize  = require('../db/db');

const messageModel = sequelize.define("message", {
    content: {type: Sequelize.TEXT },
    user_1: {type: Sequelize.INTEGER },
    user_2: {type: Sequelize.INTEGER },
    date: {type: Sequelize.DATE },
    seen: {type: Sequelize.BOOLEAN },
});

module.exports = messageModel;