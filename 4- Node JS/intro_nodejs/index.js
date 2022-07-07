const express = require('express');
const server = express();

const port = 8080;


// INICIAR SERVIDOR
// get(port, function)
server.listen(port, () => {
    console.log(`Run Server, port: ${port}`);
    console.log(`http://localhost:${port}/`);
});


// METODOS HTTP (ENDPOINT)
// get(path, function(request, response))
server.get('/', (request, response) => {
    console.log(`${request.method} ${request.url}`);

    response.status(200).send("Hello World");
});

server.get('/home', (request, response) => {
    console.log(`${request.method} ${request.url}`);

    response.status(200).send("Bienvenidos a Nimalaya");
});