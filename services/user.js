const userModel = require('../models/user.model');

const getUser = async (id) => {
    const user = await userModel.findOne({where:{ id:id }})
        .catch( e => console.log(e));
    if( user === null)
        return "user not found";

    return user.dataValues;
}

module.exports = getUser;