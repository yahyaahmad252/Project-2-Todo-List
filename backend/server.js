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

app.delete('/tasks/:id' , (req , res)=>{
    todo.deleteOne({_id : req.params.id} , (err , getTask)=>{
        if(err){
            console.log(err);
        }else{
            getTask.deletedCount === 1 ? res.json('Delete New ToDo Successfully')
             : res.status(404).json('This Todo Is Not Found')
            
        }
    })
})


app.delete('/tasks' , (req , res)=>{
    todo.deleteMany({isCompleted : true} , (err , getTask)=>{
        if(err){
            console.log(err);
        }else{
            getTask.deletedCount === 0 ?  res.status(404).json('There are no Completed Todo')
            : res.json('Delete All ToDo Successfully')
             
        }
    })
})


app.put('/tasks/:id' , (req , res)=>{
    todo.updateOne({_id: req.params.id} , {title: req.body.newTitle} , (err , getTask)=>{
        if(err){
            console.log(err);
            res.status(500).json(err)
        }else{
            getTask.modifiedCount === 1 ? res.json('Update New ToDo Successfully')
            : res.status(404).json('This Todo Is Not Found')
        }
    })
})

app.put('/tasks/:id/:isCompleted' , (req , res)=>{
    todo.updateOne({_id: req.params.id} , {isCompleted: req.params.isCompleted} , (err , getTask)=>{
        if(err){
            console.log(err);
            res.status(500).json(err)
        }else{
            getTask.modifiedCount === 1 ? res.json('Update New ToDo Successfully')
            : res.status(404).json('This Todo Is Not Found')
        }
    })
})


app.get('/filter' , (req , res)=>{
    todo.find({isCompleted: req.query.isCompleted} , (err , data)=>{
        if(err){
            console.log(err);
            res.status(err)
        }else{
            res.json(data);
        }
    })
})

/*
app.get('/complated' , (req , res)=>{
    todo.find({isCompleted: true} , (err , data)=>{
        if(err){
            console.log(err);
            res.status(err)
        }else{
            res.json(data);
        }
    })
})

app.get('/not_complated' , (req , res)=>{
    todo.find({isCompleted: false} , (err , data)=>{
        if(err){
            console.log(err);
            res.status(err)
        }else{
            res.json(data);
        }
    })
})
*/

app.listen(3000 , ()=>{
    console.log('express connect');
})
