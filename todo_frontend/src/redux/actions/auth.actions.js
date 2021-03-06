import axios, { setAuthToken } from "./axiosService";

export const loginUser = (dat) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN" });
    const { data } = await axios.post(`/api/login`, dat);
   
    localStorage.setItem("userInfo", JSON.stringify(data));
    let payload = data;
    dispatch({ type: "LOGIN_SUCCESSFUL", payload });
    return payload;
  } catch (error) {
    // alert()
    let payload = error.response.data.message;
    dispatch({ type: "LOGIN_FAIL", payload });

    throw error;
  }
};

export const registerUser = (dat) => async (dispatch) => {
  try {
   
    dispatch({ type: "REGISTER_USER" });
    const { data } = await axios.post(`/api/register`, dat);
    
    let payload = data
    dispatch({ type: "REGISTER_USER_SUCCESSFUL", payload });
    return payload;
  } catch (error) {
     let payload = error.response.data.message;
    dispatch({ type: "REGISTER_USER_FAIL", payload });
    throw error;
  }
};

export const clearError = (dat) => async (dispatch) => {
 
    dispatch({ type: "CLEAR" });
   
};
