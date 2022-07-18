const express = require('express');
const controller =  require('../controller/index.controller');

const router = express.Router();

router.get('/'    , controller.home);
router.get('/home', controller.home);


// EXPORTS
module.exports = router;