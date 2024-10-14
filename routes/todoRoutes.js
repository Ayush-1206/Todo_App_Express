const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {getTodoById, getAllTodo} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

router.post("/createTodo", createTodo);
router.get("/getTodos/:id", getTodoById);
router.get("/getTodos", getAllTodo);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);


module.exports = router;