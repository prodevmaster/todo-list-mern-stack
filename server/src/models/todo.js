const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "verify the length"],
    },
    todoPic: {
      type: Buffer,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "verify the length"],
    },
  },
  {
    timestamps: true,
  }
);

const ToDo = mongoose.model("todos", todoSchema);
module.exports = ToDo;
