const controller = {};

controller.home = (request, response) => {
    response
        .status(200)
        .send(`Bienvenidos a Nimalaya`);
}


// EXPORT
module.exports = controller;