const express = require('express');
const controller =  require('../controller/user.controller');

const router = express.Router();

router.get('/user', controller.getAllUser);
router.get('/user/id', controller.getUser);
router.put('/user', controller.putUser);
router.post('/user', controller.postUser);
router.delete('/user', controller.deleteUser);


// EXPORTS
module.exports = router;