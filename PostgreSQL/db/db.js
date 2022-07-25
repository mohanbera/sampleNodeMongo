const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'user',
    password: 'password',
    port: 5432
});

module.exports = pool;