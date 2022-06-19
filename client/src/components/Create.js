import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../actions/todo";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentTodo, setTodo] = useState({
    title: "",
    todoPic: "",
    description: "",
  });
  const changeHandler = (data) => {
    setTodo({ ...currentTodo, ...data });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (currentTodo.title.trim().length < 3) {
      return alert("title must be at lest 3 characters!");
    }
    if (currentTodo.todoPic === "") {
      return alert("you must provide an image!");
    }
    if (currentTodo.description.trim().length < 3) {
      return alert("description must be at lest 3 characters!");
    }
    const formData = new FormData();
    formData.append("title", currentTodo.title);
    formData.append("todoPic", currentTodo.todoPic);
    formData.append("description", currentTodo.description);
    dispatch(createTodo(formData, navigate));
  };

  return (
    <div className="w-1/1 text-center">
      <form
        onSubmit={submitHandler}
        className="w-1/3 flex flex-col mx-auto mt-12 justify-center items-center p-12"
      >
        <h1 className="font-bold text-white text-3xl mb-6">Create a todo</h1>
        <input
          className="py-2 px-5 border-2 border-white outline-none font-bold"
          type="text"
          placeholder="title"
          required
          onChange={(e) => {
            changeHandler({ title: e.target.value });
          }}
        />
        <input
          className="my-5"
          type="file"
          accept="image/*"
          required
          onChange={(e) => {
            changeHandler({ todoPic: e.target.files[0] });
          }}
        />
        <input
          className="py-2 px-5 border-2 border-white outline-none font-bold"
          type="text"
          placeholder="description"
          required
          onChange={(e) => {
            changeHandler({ description: e.target.value });
          }}
        />
        <button
          type="submit"
          className="mt-5 w-32 p-2 rounded-lg bg-indigo-500 duration-200 text-white font-bold hover:-translate-y-0.5"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
