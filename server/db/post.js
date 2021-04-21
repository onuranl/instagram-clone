const monk = require('monk')
const connectionString = 'localhost/posts';
const db = monk(connectionString)

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
    description: Joi.string().max(500).required(),
    }
)

const posts = db.get('posts')

function getAll() {
    return posts.find()
}

function createPost(info) {
    const postInfo = schema.validate(info)

    if(postInfo.error == null){
        return posts.insert(info)
    } else {
        return Promise.reject(result.error)
    }
}

module.exports = {createPost, getAll}