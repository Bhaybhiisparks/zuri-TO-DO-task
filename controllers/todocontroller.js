const Todo = require ("../models/todo");

exports.get_all_todo = async (req, res) =>{
    try{;
        res.status(200).json(allToDo)
        const allToDo = await toDoModel.find({})
    }catch(err){
        res.json(err);
    }
}

exports.add_a_todo = async (req, res) =>{
    
    try{
        const newToDo = new toDoModel({
            item: req.body.item
        })
        const saveItem = await new item.save()
        res.status(200).send('to do successfully added')
    }catch(err){
        res.json(err);
    }
}

exports.update_a_todo = async (req, res) =>{
    try{
        const updateToDo = await toDoModel.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).send("To do successfully updated");
    }catch(err){
        res.json(err);
    }
}

exports.delete_a_todo = async (req, res) =>{
    try{
        const deleteToDo = await toDoModel.findByIdAndDelete(req.params.id, {$set: req.body})
        res.status(200).send("Successfully deleted");
    }catch(err){
        res.json(err);
    }
}