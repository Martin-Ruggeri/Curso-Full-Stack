----------------------------------------------------------------------------------
------------------------------   NODE CON EXPRESS   ------------------------------
----------------------------------------------------------------------------------
Para iniciar un app con express, se requiere importar express, y ejecutar un servidor en un puerto determinado, para ello:

 index.js:
 01 const express = require('express');
 02 const server = express();
 03 const port = 8080;
 04
 05 // INICIAR SERVIDOR
 06 server.listen(port, () => {
 07   console.log(`Run Server, port: ${port}`);
 08   console.log(`http://localhost:${port}/`);
 09 });
 
 Con el metodo listen, se inicia el servidor, escuchando en el puerto pasado en el primer argumento, de segundo argumento recibe una funcion la cual se ejecuta al levantar correctamente el servidor.


Para agregar metodos HTTP, se utiliza los metodos que ofrece express 'get', 'put', 'post', 'delete', etc. Para ello:

 index.js:
 10 // METODOS HTTP
 11 server.get('/', (request, response) => {
 12   console.log(`${request.method} ${request.url}`);
 13
 14   response.status(200).send("Hello World");
 15 });
 16
 17 server.get('/home', (request, response) => {
 18   console.log(`${request.method} ${request.url}`);
 19
 20   response.status(200).send("Bienvenidos a Nimalaya");
 21 });

 Para acceder a los metodos anteriores es necesario ingresar en el navegador o de postman a la siguientes urls http://localhost:8080/ y http://localhost:8080/home

 Nota: para los post, put o delete no se puede acceder desde el navegador directamente sino se debe realizar desde postman o desde el frontend.