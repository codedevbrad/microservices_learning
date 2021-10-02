const Pool = require('pg').Pool;

const pool = new Pool({
    user:     'postgres' ,
    password: 'password' ,
    database: 'postgres' ,
    host:     process.env.DATABASE_URL || 'localhost' ,
    port:     5432
})

module.exports = pool;