const monk = require('monk')
const connectionString = 'localhost/register';
const db = monk(connectionString)


const Joi = require('joi');

const schema = Joi.object({
    currentUser: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    followedUser: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
})

const follow = db.get('register')


function followUser(info) {
    const followinfo = schema.validate(info)

    if( followinfo.error == null) {
        return follow.update(
            { username: `${info.currentUser}`},
            { $push: { following: `${info.followedUser}` } }
        ).then(() => {
            return follow.update(
            { username: `${info.followedUser}`},
            { $push: { followers: `${info.currentUser}` } } )
        })
    } else {
        return Promise.reject(result.error)
    }
}

module.exports = {followUser}
