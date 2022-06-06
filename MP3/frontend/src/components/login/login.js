import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";

toast.configure();

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async () => {
    const res = await axios.post("http://localhost:4000/login", user);
    if (res.data.message === "Login successful") {
      toast.success("Login successful", { autoClose: 2000 });
      navigate("/home");
    } else {
      toast.error("Not a valid user", { autoClose: 800 });
    }
  };

  return (
    <Box className="login-container">
      <Box className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>

      <div className="button" onClick={login}>
        Login
      </div>

      <div>or</div>
      <div className="button" onClick={() => navigate("/register")}>
        Register
      </div>
      </Box>
    </Box>
  );
};

export default Login;
