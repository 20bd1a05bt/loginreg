const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router=require('./routes/TodoRoutes');

require('dotenv').config();
const  app=express();
const PORT=process.env.PORT||3000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log(`Connect to DataBase`)})
.catch((error)=>console.log(`${error.message}`));
app.use(router);

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})