const monk = require('monk')
const connectionString = 'localhost/register';
const db = monk(connectionString)


const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    imageURL: Joi.string().uri({
        scheme: [
            /https?/
        ]
    }),
})

const register = db.get('register')

function getAll() {
    return register.find()
}

function create(info) {
    const userinfo = schema.validate(info)

    if(!info.imageURL) {
        info.imageURL = ""
    }

    if(userinfo.error == null){
        return register.insert(info)
    } else {
        return Promise.reject(result.error)
    }
}




module.exports = {create, getAll}