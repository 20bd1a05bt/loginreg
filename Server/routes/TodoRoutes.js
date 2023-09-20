const {Router} = require('express');
const {getTodo,saveTodo,updateTodo,DeleteTodo}=require('../Controllers/TodoController')
const router=Router();
 router.get('/',getTodo);
 router.post('/save',saveTodo);
 router.post('/update',updateTodo);
 router.post('/delete',DeleteTodo);
module.exports=router;