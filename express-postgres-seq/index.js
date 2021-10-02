const express = require('express');
const sequelize = require('./src/util/database');

const app = express();
const port = process.env.port || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Set proper Headers on Backend
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.get('/' , ( req , res ) => {
    res.status(200).send( 'hey dude' );
});

app.use('/api' , require('./src/api'));

(async () => {
    try {
      await sequelize.sync(
        { force: false } //Reset db every time
      );
      app.listen(port, () => console.log('Server running...'))
    } catch (error) {
      console.log(error);
    }
  })();