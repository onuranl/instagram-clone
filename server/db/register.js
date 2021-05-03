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
        info.imageURL = "https://instagram.fkgf2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkgf2-1.fna.fbcdn.net&_nc_ohc=4Nn_SAq9gJsAX_mW4yx&edm=AP9-OL4AAAAA&ccb=7-4&oh=67f2385a8c0f0a73db7078652fa6c792&oe=6098DA8F&_nc_sid=737f18&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4"
    }

    if(userinfo.error == null){
        return register.insert(info)
    } else {
        return Promise.reject(result.error)
    }
}




module.exports = {create, getAll}