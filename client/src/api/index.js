import axios from "axios";
const URL = "http://localhost:3001";

// Handle the endpoints
export const createTodo = (data) =>
  axios.post(`${URL}/todo`, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
export const getTodos = () => axios.get(`${URL}/todo`);
export const deleteTodo = (id) => axios.delete(`${URL}/todo/${id}`);
