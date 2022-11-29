import React, { useContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Login from "./Pages/Login";
import AddUser from "./Pages/AddUser";
import UserData from "./Pages/UserData";
import { RealtimeData } from "./Pages/Dashboard";



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<RealtimeData />} /> 
          <Route exact path="/agregaruser" element={<AddUser />} /> 
          <Route exact path="/userdata" element={<UserData />} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;