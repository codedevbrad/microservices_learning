const express = require('express');
const app = express();
const dbSetup = require('./db_plain/setup');
const port = process.env.port || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

dbSetup();

app.use( '/db' , require('./db_plain/api' ));

app.get('/' , ( req , res ) => {
    res.status(200).send( 'hey dude' );
});

app.listen(port, () => console.log('Server running...'));