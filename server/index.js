const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()


const registerinfo = require("./db/register")
const postInfo = require("./db/post")


app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/register', function (req, res) {
    registerinfo.getAll().then(registerinfo => {
        res.json(registerinfo)
    })
})

app.get('/posts', function (req, res) {
    postInfo.getAll().then(postInfo => {
        res.json(postInfo)
    })
})

app.post('/register', function (req,res) {
    console.log(req.body)

    registerinfo.create(req.body).then(registerinfo => {
        res.json(registerinfo)
    }).catch(err => {
        res.status(500)
        res.json(err)
    })
})

app.post('/posts', function (req, res) {
    console.log(req.body)

    postInfo.createPost(req.body).then(postInfo => {
        res.json(postInfo)
    }).catch(err => {
        res.status(500)
        res.json(err)
    })
})


const port = process.env.PORT || 1234

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})

