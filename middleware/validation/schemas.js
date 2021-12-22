const Joi = require('joi');

const SignUpSchema = Joi.object({
    firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
    lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
    login: Joi.string()
        .alphanum()
        .min(4)
        .max(50)
        .required(),
    password: Joi.string()
        .min(5)
        .max(16)
        .required()
});

module.exports = {
    SignUpSchema,
};