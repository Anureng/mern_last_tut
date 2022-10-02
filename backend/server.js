const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const app=express();

dotenv.config({path:'.env'});

const user=require('./model/useSchema');
const db=process.env.DATABASE;

require('./db/conn');
app.use(express.json());

app.use(require('./routes/auth'));

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`connect ${port}`);
})