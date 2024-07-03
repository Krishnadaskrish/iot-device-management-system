const express = require('express');
const UserRouter = express.Router();
const userConteroller = require('../controllers/userController')


UserRouter
.post('/register',userConteroller.register)


module.exports = UserRouter
// helloo