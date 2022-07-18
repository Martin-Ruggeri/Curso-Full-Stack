const controller = {};

controller.getAllUser = (request, response) => {
    response
        .status(200)
        .send(`GET ALL USER`);
}

controller.getUser = (request, response) => {
    response
        .status(200)
        .send(`GET USER ID`);
}

controller.putUser = (request, response) => {
    response
        .status(200)
        .send(`UPDATE USER`);
}

controller.postUser = (request, response) => {
    response
        .status(200)
        .send(`NEW USER`);
}

controller.deleteUser = (request, response) => {
    response
        .status(204)
        .send(`DELETE USER`);
}

// EXPORT
module.exports = controller;