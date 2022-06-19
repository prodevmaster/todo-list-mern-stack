const ToDo = require("../models/todo.js");
/* Create a todo */
const createTodo = async (req, res) => {
  const body = {
    ...req.body,
    todoPic: req.file.buffer,
  };
  try {
    const todo = await ToDo.create(body);
    res.status(201).json(todo);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
/* get all the todos */
const getTodos = async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.status(200).json(todos);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

/* delete a single todo */
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await ToDo.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { createTodo, getTodos, deleteTodo };
