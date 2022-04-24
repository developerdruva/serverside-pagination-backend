var express  = require('express');
var router = express.Router();

var userController = require("../controllers/user.controller");

router.post('/adduser', userController.register);

router.get('/usersin', userController.usersIn);

router.get('/usersCount', userController.usersCount);

module.exports = router;    
