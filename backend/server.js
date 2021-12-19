const express = require('express');
let app = express();
const db = require('./db');
const todo = require('./todo');

app.get('/' , (req , res)=>{
   todo.find({} , (err , data)=>{
        res.json(data)
   })
})


app.post('/insert' , (req , res)=>{

   db.insertMany([{title: req.body.title , isCompleted: req.body.isCompleted}] , (err)=>{
       if(err){
           console.log('err => ' + err);
       }else{
           res.json("Create New ToDo Successfully");
       }
   })

})

app.listen(3000 , ()=>{
    console.log('express connect');
})