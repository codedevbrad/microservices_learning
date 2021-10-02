const express = require('express');
const redis   = require('redis');
const SERVER_PORT = 5000;
const client = require('./redis-client');
const app = express();

app.get('/dataSET' , ( req , res , next ) => {
    var obj = { name: "John", age: 30, city: "New York" };
    var myJSON = JSON.stringify(obj);
    client.setAsync( 'username' , myJSON )
          .then( data => res.status( 200 ).send('redis set, awesome that is'))
          .catch( err => res.status( 500 ).send( 'err'));
});

app.get('/dataGET' , ( req , res , next ) => {
    client.getAsync( 'username' )
          .then( data => {
              let parsed = JSON.parse( data );
              res.status( 200 ).send( parsed.name );
          })
          .catch( err => res.status(500).send(  err ));
});

app.get('/' , ( req , res , next ) => res.status(200).send('hey there dudes'));

app.listen( SERVER_PORT , ( ) => console.log('server running') );