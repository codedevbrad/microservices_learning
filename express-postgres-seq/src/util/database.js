const Sequelize = require('sequelize');

//GET ENV VARIABLES FROM
const sequelize = new Sequelize(
    'writable_database',
    'postgres' ,
    'password' ,
    {
        host:   'localhost',
        dialect: 'postgres'
    });

module.exports = sequelize;