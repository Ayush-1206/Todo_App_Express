const Todo = require("../models/Todo");
const mongoose = require("mongoose");

    exports.getTodoById = async (req, res) => {
        try{
            let id = req.params.id;
            id = new mongoose.Types.ObjectId( id );
            const todo = await Todo.findById( {_id : id});

            if(!todo){
                res.status(500).json({
                    status : false,
                    data : "error while getting todo"
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
                data : "error while getting todo"
            })
        }
    }

exports.getAllTodo = async (req, res) => {
    try{
        // const {todoId} = req.body;
        
        const todos = await Todo.find({});

        res.status(200).json({
            status : true,
            data : todos
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            status : false,
            message :err.message,
            data : "error while getting todos"
        })
    }
}