const monk = require('monk');
const connectionString = process.env.PORT || 'localhost/register';
const db = monk(connectionString);

module.exports = db;