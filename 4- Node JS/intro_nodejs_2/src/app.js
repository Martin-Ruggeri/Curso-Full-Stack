const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// SETTING
app.use(morgan('common'));
app.set('view', path.join(__dirname, 'view'));
app.set('view engine', 'ejs')

require('dotenv').config({path:'../.env'});
const port = process.env.PORT || 8080;


// SERVER
app.listen(port , () =>{
    console.log(`Servidor RUN`);
    console.log(`htpp://localhost:${port}/`);
});


// ROUTES
app.get('/', (request, response) => {
    response.render('index.ejs');
});

//app.use(require('./route/index.route'));
app.use(require('./route/user.route'));