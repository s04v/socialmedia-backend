const { cryptPassword } = require('../utils/cryptPassword');
const userModel = require('../models/user.model');

const signUp = async (firstName, lastName, login, password) => {
    const userCount = await userModel.count({where:{login:login}})
        .catch( e => console.log(e));
    if(userCount > 0)
        return "user with same login exists";

    const isAdded = userModel.create({
        first_name: firstName,
        last_name: lastName,
        login: login,
        password: cryptPassword(password),
    }).catch( e => console.log(e));

    if(!isAdded)
        return "error adding a user to the database";

    return "success";
}

module.exports = signUp;
