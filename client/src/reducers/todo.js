import { CREATE, GET_ALL, DELETE } from "../constants/index";

const reducer = (state = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case GET_ALL:
      return action.payload;
    case DELETE:
      return state.filter((todo) => todo._id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
