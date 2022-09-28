const express=require('express');

const dotenv=require('dotenv');

const mongoose=require('mongoose')

const app=express();

app.use('/api/goals',require('./routes/goalRoutes'))

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`connect ${port}`);
})