const { Sequelize, DataTypes } = require('sequelize');
const  sequelize  = require('../db/db');

const RelationshipModel = sequelize.define("relationship", {
    user_1: {type: Sequelize.INTEGER },
    user_2: {type: Sequelize.INTEGER },
    status: {type: Sequelize.ENUM('friends', 'followers') },
});

module.exports = RelationshipModel;