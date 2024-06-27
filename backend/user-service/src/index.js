const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRoute = require('./adapters/express/routes/userRouter')
const app = express()
const PORT = process.env.PORT || 3000;

dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://krishnadas10official:fFs00SzLQF63TU4D@cluster0.okzakwg.mongodb.net/CrudTask";

app.use(express.json())


app.use('/api',userRoute)

mongoose.connect(MONGODB_URI, )
  .then(() => {
    console.log('Connected to MongoDB');
    
  })
  .catch((err) => console.error('MongoDB connection error:', err));

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });