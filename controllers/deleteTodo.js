const Todo = require("../models/Todo");
const mongoose = require("mongoose");

exports.deleteTodo = async (req, res) => {
    try{
        let id = req.params.id;
        id = new mongoose.Types.ObjectId( id );

        const todo = await Todo.findByIdAndDelete( {_id : id});

        if(!todo){
            res.status(500).json({
                status : false,
                data : "error while deleting todo"
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
            data : "error while deleting todo"
        })
    }
}