const { DataTypes } = require('sequelize');
const  sequelize  = require('../db/db');

const RelationshipModel = sequelize.define("relationship", {
    user_1: {type: DataTypes.INTEGER },
    user_2: {type: DataTypes.INTEGER },
    status: {type: DataTypes.ENUM('friends', 'followers') },
});

module.exports = RelationshipModel;