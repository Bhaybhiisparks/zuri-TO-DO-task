const { Router } = require('express');

const router = Router();

// const toDoModel = require('../models/todo');

const todoController = require("../controllers/todocontroller");


//get all to-do 
router.get('/get/todo', todoController.get_all_todo);


//add a to-do to the to-do list
router.post ("/add/todo", todoController.add_a_todo);

//update a to-do
router.put("/update/todo/:id", todoController.update_a_todo);

//delete a to do from the to-do list
router.delete("/delete/todo/:id", todoController.delete_a_todo);

module.exports = router;