import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";


const Register = () => {
  const history = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = async () => {
    const { name, email, password, reEnterPassword } = user;

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regEx.test(email) && email !== "") {
      toast.error("Email is not valid", { autoClose: 800 });
      return;
    } else if (name && email && password && password === reEnterPassword) {
      const res = await axios.post("http://localhost:4000/register", user);
      console.log(res);
      if (res.data.message === "Successfully Registered") {
        toast.success("Registered successfully", { autoClose: 2000 });
        history("/login");
      }
      if (res.data.message === "User already registered") {
        toast.success("Already Registered with this Email", {
          autoClose: 1000,
        });
        history("/login");
      }
    } else if (!name) {
      toast.error("Please fill name field", { autoClose: 800 });
    } else if (!email) {
      toast.error("Please fill the email field", { autoClose: 800 });
    } else if (!password) {
      toast.error("Please fill the password field", { autoClose: 800 });
    } else if (!reEnterPassword) {
      toast.error("Please fill the reEnterPassword field", { autoClose: 800 });
    } else if (password !== reEnterPassword) {
      toast.error("Password didn't match", { autoClose: 800 });
    }
  };

  return (
    <Box className="register-container">
      <Box className="register">
      {console.log("User", user)}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => history("/login")}>
        Login
      </div>
    </Box>
    </Box>
  );
};

export default Register;
