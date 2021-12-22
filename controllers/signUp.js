const { SignUpSchema }   = require('../middleware/validation/schemas');
const SignUpService = require('../services/signUp');
const createResponse = require('../middleware/validation/response');

const signUp = async (req, res) => {
    const { error } =  SignUpSchema.validate(req.body);
    if(error) {
        console.log(error.details[0].message);
        res.status(400).send(createResponse(error));
        return;
    }

    const param = req.body;
    const str = await SignUpService(param.firstName, param.lastName, param.login, param.password);
    res.send(str);
}

module.exports = signUp;