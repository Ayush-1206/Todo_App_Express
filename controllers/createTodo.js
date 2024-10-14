const Todo = require("../models/Todo");


exports.createTodo = async(req, res) => {
    try{
        const {title, description} = req.body;

        const response = await Todo.create({title, description});

        res.status(200).json(
            {
                success : true,
                data : response,
                message : "Todo created succesfully"
            }
        )
    }
    catch(err){
        console.error(err);
        res.status(500).json(
            {
                success : false,
                data : "error while creating todo",
                message : err.message
            }
        );
    }
}