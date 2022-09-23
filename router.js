//home route with express routers
var express = require('express');
var router = express.Router();


var homeController = require('./controllers/homeController.js');
router.get('/', homeController.gethome);


module.exports = router;