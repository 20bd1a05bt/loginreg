const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const  app=express();
const PORT=process.env.PORT||3000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log(`Connect to DataBase`)})
.catch((error)=>console.log(`${error.message}`));

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})