const express = require('express');
const app=express();
const path=require('path');
const config=require('config');
const router=require('./routes/EmployeeRouter');

app.use('/api',router);

//from config
app.listen(config.get('app.port'),()=>{
    console.log('server started at '+config.get('app.port'));
});