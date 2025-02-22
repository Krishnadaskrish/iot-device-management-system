const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()


const userRoute = require('./adapters/express/routes/userRouter')
const app = express()
const PORT = process.env.PORT 

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/device-service";

app.use(express.json())


app.use('/api/user',userRoute)

mongoose.connect(MONGODB_URI )
  .then(() => {
    console.log('Connected to MongoDB');
    
  })
  .catch((err) => console.error('MongoDB connection error:', err));

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });