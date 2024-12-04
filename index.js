// require('dotenv').config();
const express=require('express');
const app=express();
const PORT=8000;

app.get('/',(req,res)=>{
    res.send("Hello World!");
});
app.get('/instagram',(req,res)=>{
      res.send(`@alinda_pal`);    
});
app.get('/login',(req,res)=>{
    res.send(`<h1>Please login at the login page</h1>`);    
});

app.listen(PORT,()=>{
    console.log(`The server listening the port no ${PORT}`);
}).on("error",(err)=>{
    console.error("Server failed to start:ERROR",err);
});
