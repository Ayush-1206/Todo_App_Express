const Todo = require("../models/Todo");
const mongoose = require("mongoose");

exports.updateTodo = async (req, res) => {
    try{
        let id = req.params.id;
        const {title, description} = req.body;
        id = new mongoose.Types.ObjectId( id );
        const todo = await Todo.findByIdAndUpdate( {_id : id}, {title, description, updatedAt: Date.now()});

        if(!todo){
            res.status(500).json({
                status : false,
                data : "error while updating todo"
            })
        }

        res.status(200).json({
            status : true,
            data : todo,
            message : "."
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            status : false,
            message :err.message,
            data : "error while updating todo"
        })
    }
}