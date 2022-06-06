import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import DrawerMenu from "./components/Drawer";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { Box } from "@material-ui/core";
import Compiler from "./Compiler/Compiler";
function App() {


  return (
    <>
      <Router>
        <Routes>
        <Route
            exact
            path="/compiler"
            element={<Compiler />}
          ></Route>
          !(user && user._id)?
          <Route
            exact
            path="/"
            element={<Login />}
          ></Route>
          :
          <Route
            exact
            path="/home"
            element={
              <Box>
                <DrawerMenu />
              </Box>
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login  />}
          ></Route>
          <Route exact path="/register" element={<Register />}></Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
