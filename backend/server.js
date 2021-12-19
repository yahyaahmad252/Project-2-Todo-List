const express = require('express');
let app = express();
app.use(express.json());
const db = require('./db');
const todo = require('./todo');

app.get('/' , (req , res)=>{

   res.send('GET / is working')

})

app.get('/tasks' , (req , res)=>{
   todo.find({} , (err , data)=>{
        res.json(data)
   })
})


app.post('/tasks' , (req , res)=>{

    todo.create(req.body , (err , newTsak)=>{
       if(err){
           console.log('err => ' + err);
       }else{
           res.status(201).json("Create New ToDo Successfully");
       }
   })

})

app.listen(3000 , ()=>{
    console.log('express connect');
})