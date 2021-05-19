const db = require('./connection');


const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    imageURL: Joi.string().uri({
        scheme: [
            /https?/
        ]
    }),
})

const register = db.get('register')


function addImage(info) {
    const userImage = schema.validate(info)

    if(userImage.error == null){
        return register.update({username : info.username}, { $set: {imageURL : info.imageURL}})
    } else {
        return Promise.reject(result.error)
    }

}

module.exports = {addImage}