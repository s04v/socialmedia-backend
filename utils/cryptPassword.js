const bcrypt = require('bcrypt');

const cryptPassword = (password) => {
    const hash = bcrypt.hashSync(password, process.env.SALT);
    console.log(hash);
    return hash;
}

const comparePasswordHash = (password, hash) => {
    console.log(bcrypt.hashSync(password, process.env.SALT) === hash);
}

module.exports = {
    cryptPassword,
    comparePasswordHash,
};