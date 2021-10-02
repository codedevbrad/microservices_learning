  
const pool = require('./db');

// CREATE DATABASE writable_database;

// -- \c writable_database
// -- \dt

const userCreate = `
CREATE TABLE users (
    email varchar,
    firstName varchar,
    lastName varchar,
    age int
);
`;

const writableCreate = `
CREATE TABLE writable(
    writable_id SERIAL PRIMARY KEY ,
    data TEXT
);
`;

module.exports = async( ) => {
    
    await pool.query( userCreate )
        .then(res => {
            console.log('Table is successfully created');
        })
        .catch(err => {
            console.log('users exist');
        })

    await pool.query( writableCreate )
        .then(res => {
            console.log('Table is successfully created');
        })
        .catch(err => {
            console.log('writable exist');
        });
};