import todoReducer from "./todo.reduce";
import AuthReducer from "./auth.reducer";
const baseReduce = {
  todoDetails: todoReducer,
  userDetails: AuthReducer,
};

export default baseReduce;
