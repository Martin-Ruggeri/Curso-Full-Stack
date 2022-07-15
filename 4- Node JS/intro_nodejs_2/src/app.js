// Esto es con ES6 (Se requiere agregar   "type":"module" en package.json)
import express from 'express'

const app = express();
const PORT = 8080;

app.use(express.static('public'))
app.use(express.json())

// INICIAR SERVIDOR
app.listen(PORT, () => {
    console.log(`Run Server, PORT: ${PORT}`);
    console.log(`http://localhost:${PORT}/`);
});


// ENDPOINT
app.get('/', (request, response) => {
    response.status(200).send("Hello World");
});

app.get('/home', (request, response) => {
    response.status(200).send("Bienvenidos a Nimalaya");
});


// USER
app.get('/users/', (request, response) => {
    response.status(200).send(`Get all user`);
});

app.get('/user/', (request, response) => {
    response.status(200).send(`Get id user`);
});

app.put('/user/', (request, response) => {
    response.status(200).send(`Put user`);
});

app.post('/user/', (request, response) => {
    response.status(200).send(`Post user`);
});

app.delete('/user/', (request, response) => {
    response.status(200).send(`Delete user`);
});
