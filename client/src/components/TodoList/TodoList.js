import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodos } from "../../actions/todo";
import Todo from "./Todo";
const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  const todos = useSelector((state) => state.todo);
  return (
    <div className="grid grid-cols-4 gap-4">
      {todos.map((todo, idx) => {
        return <Todo key={idx} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
