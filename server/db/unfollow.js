const db = require('./connection');


const Joi = require('joi');

const schema = Joi.object({
    currentUser: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    unfollowedUser: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
})

const follow = db.get('register')


function unfollowUser(info) {
    const followinfo = schema.validate(info)

    if( followinfo.error == null) {
        return follow.update(
            { username: `${info.currentUser}`},
            { $pull: { following: `${info.unfollowedUser}` } }
        ).then(() => {
            return follow.update(
            { username: `${info.unfollowedUser}`},
            { $pull: { followers: `${info.currentUser}` } } )
        })
    } else {
        Promise.reject(result.error)
    }
}

module.exports = {unfollowUser}
