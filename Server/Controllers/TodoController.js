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
        res.send(data);
    });
    
}

module.exports.updateTodo=async(req,res)=>{
    const{_id,text}=req.body;
    TodoModel.findByIdAndUpdate(_id,{text})
    .then(()=>{
        res.status(201).send("updated successfully")})
    .catch((error)=>{console.log(`${error.message}`)})
}
module.exports.DeleteTodo=async(req,res)=>{
    const{_id,text}=req.body;
    TodoModel.findByIdAndDelete(_id)
    .then(()=>{
        res.status(201).send("Deleted successfully")})
    .catch((error)=>{console.log(`${error.message}`)})
}