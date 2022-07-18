const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('common'));
const PORT = 8080;

app.listen(PORT , () =>{
    console.log(`Servidor RUN`);
    console.log(`htpp://localhost:${PORT}/`);
});

// ROUTES
app.use(require('./route/index.route'));
app.use(require('./route/user.route'));