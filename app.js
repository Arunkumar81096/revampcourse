const express = require('express');
const dotenv = require('dotenv');
const env = process.argv[2] || "development";
dotenv.config({path : `.env.${env}`});
const app = express();

const log= (message)=>{
  const time = new Date().toISOString();
  console.log(`[${time}][${env.toUpperCase()}] ${message}`)
  }

const PORT = process.env.PORT;
const APP = process.env.APP;

app.get('/',(req,res)=>{
res.send("Hello from Express JS" + APP);
});

app.get('/health',(req,res)=>{
   log("Health check has been called");
   res.status(200).json({status: "UP", env});
});

app.listen(PORT,()=>{
log("Application is running on port" + PORT)
})
