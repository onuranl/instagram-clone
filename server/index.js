const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const passport = require('passport')

const app = express()

const userinfo = []

const initializePassport = require("./passport-config")
initializePassport(passport,
    username => {
        registerinfo.getAll().then(user => {
            user.find(data => data.username === username)
        })
    },
    password => {
        registerinfo.getAll().then(user => {
            user.find(data => data.username === password)
        })
    },
    id => {
        registerinfo.getAll().then(user => {
            user.find(data => data.id === id)
        })
    }
)

const registerinfo = require("./db/register")

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', function (req, res) {
  res.send('pale')
})

app.get('/register', function (req, res) {
    registerinfo.getAll().then(registerinfo => {
        res.json(registerinfo)
    })
})

app.post('/register', function (req,res) {
    console.log(req.body)

    registerinfo.create(req.body).then(registerinfo => {
        res.json(registerinfo)
        userinfo.push(req.body)
    }).catch(err => {
        res.status(500)
        res.json(err)
    })
})


const port = process.env.PORT || 1234

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})

