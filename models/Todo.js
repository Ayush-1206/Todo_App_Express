const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true,
            maxLength : 25
        },
        description : {
            type : String,
            required : true,
            maxLength : 60 
        },
        createdAt : {
            type : Date,
            required : true,
            default : Date.now() 
        },
        createdAt : {
            type : Date,
            required : true,
            default : Date.now() 
        }    
    }
);

module.exports = mongoose.model("Todo", todoSchema)