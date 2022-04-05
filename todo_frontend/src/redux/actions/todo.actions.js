import axios, { setAuthToken } from "./axiosService";

export const getTodo = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_TODOS" });
    let payload = [];
    const response = await axios.get(`/api/todos`);

    const { data } = response;
    payload = data;
    dispatch({ type: "FETCH_TODOS_SUCCESSFUL", payload });
    return;
  } catch (error) {
    console.log(error);
  }
};

export const postTodo = (data) => async (dispatch) => {
  try {
    dispatch({ type: "POST_TODO" });

    const response = await axios.post(`/api/todos`, data);
    let payload = [];
    payload = response;
    dispatch({ type: "POST_TODO_SUCCESSFUL", payload });
    return payload;
  } catch (error) {
    let payload = "";
    if (error.response === undefined) {
      payload = "timeout";
      dispatch({ type: "POST_TODO_FAIL", payload });
      throw error;
    } else {
      var obj = error.response.data;
      payload =
        error.response && error.response.data.message
          ? error.response.data.message
          : obj[Object.keys(obj)[0]];
      dispatch({ type: "POST_TODO_FAIL", payload });
      throw error;
    }
  }
};

export const updateTodo = (id,data) => async (dispatch) => {
  
  try {
    dispatch({ type: "UPDATE_TODO" });
    const response = await axios.put(`/api/todos/${id}`, data);
    let payload = [];
    payload = response;
    dispatch({ type: "UPDATE_TODO_SUCCESSFUL", payload });
    return payload;
  } catch (error) {
    
      dispatch({ type: "UPDATE_TODO_FAIL", error });
      throw error;
    
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_TODO" });

    const response = await axios.delete(`/api/todos/${id}`);
    let payload = [];
    payload = response;
    dispatch({ type: "DELETE_TODO_SUCCESSFUL", payload });
    return payload;
  } catch (error) {
    let payload = "";
    if (error.response === undefined) {
      payload = "timeout";
      dispatch({ type: "DELETE_TODO_FAIL", payload });
      throw error;
    } else {
     
      throw error;
    }
  }
};
