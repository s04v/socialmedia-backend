const { DataTypes } = require('sequelize');
const  sequelize  = require('../db/db');

const messageModel = sequelize.define("message", {
    content: {type: DataTypes.TEXT },
    user_1: {type: DataTypes.INTEGER },
    user_2: {type: DataTypes.INTEGER },
    date: {type: DataTypes.DATE },
    seen: {type: DataTypes.BOOLEAN },
});

module.exports = messageModel;