import { CREATE, GET_ALL, DELETE } from "../constants/index";
import * as api from "../api/index";

/* Create todo */
export const createTodo = (todo, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createTodo(todo);
    dispatch({ type: CREATE, payload: data });
    navigate("/");
  } catch (e) {
    console.log(e.message);
  }
};
/* Get all todos */
export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.getTodos();
    dispatch({ type: GET_ALL, payload: data });
  } catch (e) {
    console.log(e.message);
  }
};

/* Delete todo */
export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api.deleteTodo(id);
    dispatch({ type: DELETE, payload: id });
  } catch (e) {
    console.log(e.message);
  }
};
