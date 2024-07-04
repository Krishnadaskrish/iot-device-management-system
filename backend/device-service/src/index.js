const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/iot-device-management";
const DeviceRoute = require('./routes/deviceRoute')


const app = express()
const PORT = process.env.PORT 
app.use(express.json())

app.use('/api/device',DeviceRoute)

mongoose.connect(MONGODB_URI )
  .then(() => {
    console.log('Connected to MongoDB');
    
  })
  .catch((err) => console.error('MongoDB connection error:', err));



app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})