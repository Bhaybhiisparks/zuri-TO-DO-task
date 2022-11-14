const mongoose = require ("mongoose");

const TodoSchema = new mongoose.Schema({
    item:{
        type: String,
        required: [true, "please fill the todo"]
    }
});

module.exports = mongoose.model('todo', TodoSchema);