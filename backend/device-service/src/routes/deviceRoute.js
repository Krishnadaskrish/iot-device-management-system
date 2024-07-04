const express = require('express');
const deviceController = require('../controllers/deviceController');

const deviceRouter = express.Router();

deviceRouter
.post('/addDevice', deviceController.addDevice)
.get('/getdevice', deviceController.getDevice)
.get('/id/:id', deviceController.getDeviceById)
.patch('/update/:id', deviceController.updateDevice)
.delete('/delete/:id', deviceController.DelateDevice)





module.exports = deviceRouter