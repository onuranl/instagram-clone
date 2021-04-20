const LocalStrategy = require('passport-local').Strategy

function initialize(passport, getUserByUsername, getUserByPassword, getUserById) {
    const authenticateUser = (username, password, done) => {
        const user = getUserByUsername(username)
        const userpassword = getUserByPassword(password)
        if(user == null) {
            return done(null, false, { message: 'No user with that username' })
        }
        if(userpassword == null) {
            return done(null, false, { message: 'Wrong password' })
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'username' }, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize