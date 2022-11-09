import React, { useContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} /> {/* PENDING */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;