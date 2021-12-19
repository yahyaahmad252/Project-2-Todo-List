const {Schema , model} = require('mongoose');

let todoSchema = new Schema({
    title:{type:String},
    isCompleted:{type:Boolean},
});

const todo = model("Todo" , todoSchema);

module.exports = todo;