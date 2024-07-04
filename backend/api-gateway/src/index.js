const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 3000



// Proxy for User Service
app.use('/api/user', createProxyMiddleware({
    target: process.env.USER_SERVICE_URL,
    changeOrigin: true
  }));
  
// Proxy for User Service

  app.use('/api/device', createProxyMiddleware({
    target: process.env.DEVICE_SERVICE_URL,
    changeOrigin: true
  }));



app.listen(port,()=>{
    console.log(`api gate way is running on ${port}`)
})