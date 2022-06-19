const express = require("express");
const router = express.Router();
const { upload, errorFileHandler } = require("../controllers/filectx.js");
const {
  createTodo,
  getTodos,
  deleteTodo,
} = require("../controllers/todo.js");

router.post("/todo", upload.single("todoPic"), createTodo, errorFileHandler);
router.get("/todo", getTodos);
router.delete("/todo/:id", deleteTodo);

module.exports = router;
