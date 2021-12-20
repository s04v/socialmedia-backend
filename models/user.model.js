const { Sequelize, DataTypes } = require('sequelize');
const  sequelize  = require('../db/db');

const UserModel = sequelize.define("user", {
    first_name: {type: Sequelize.STRING },
    last_name: {type: Sequelize.STRING },
    login: {type: Sequelize.STRING },
    password: {type: Sequelize.STRING },

});

module.exports = UserModel;