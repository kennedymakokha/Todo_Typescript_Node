import React, { useEffect, useState } from "react";
import Register from "./auth/register.auth";
import LoginView from "./auth/login.auth";
import {
  loginUser,
  registerUser,
  clearError,
} from "./redux/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const error = useSelector((state) => state.userDetails);
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    phone: 0,
  });
  const dispatch = useDispatch();
  const [registering, setReistering] = useState(false);
  const toggleRegistering = () => {
    dispatch(clearError());
    setReistering((prevState) => !prevState);
  };
  const changeInput = (e) => {
    dispatch(clearError());
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const RegisterUser = () => {
    dispatch(registerUser(user));
    if (error && error.error) {
      setReistering(true);
      return;
    } else {
      toggleRegistering();
    }
  };
  const LoginUser = () => {
    dispatch(loginUser(user));

    return navigate("/dashboard");
  };
  useEffect(() => {

  }, [error]);
  return (
    <div className="h-screen w-screen bg-slate-900 flex justify-center items-center">
      {registering ? (
        <Register
          toggleRegistering={toggleRegistering}
          registering={registering}
          changeInput={changeInput}
          submit={RegisterUser}
          error={error.error}
        />
      ) : (
        <LoginView
          toggleRegistering={toggleRegistering}
          registering={registering}
          changeInput={changeInput}
          submit={LoginUser}
          error={error.error}
        />
      )}
    </div>
  );
}
