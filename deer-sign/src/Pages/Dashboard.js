import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


import '../SCSS/Elements/_dashboard.scss'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <h1>Dashboard Test</h1>
    </div>
  );
}
export default Dashboard;