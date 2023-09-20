const TodoModel =require('../Models/TodoModel');
module.exports.getTodo=async(req,res)=>{
    const Todo=await TodoModel.find();
    res.send(Todo);
}
module.exports.saveTodo=async(req,res)=>{
    const {text}=req.body;
    TodoModel.create({text})
    .then((data)=>{
        console.log('added successfully');
        console.log(data);
        res.send(Todo);
    });
    
}