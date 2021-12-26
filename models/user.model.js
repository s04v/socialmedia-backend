const { DataTypes } = require('sequelize');
const  sequelize  = require('../db/db');

const UserModel = sequelize.define("user", {
    first_name: {type: DataTypes.STRING },
    last_name: {type: DataTypes.STRING },
    login: {type: DataTypes.STRING },
    password: {type: DataTypes.STRING },
});

module.exports = UserModel;