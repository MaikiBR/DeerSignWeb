//import React, { useState } from "react";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


import '../SCSS/Elements/_dashboard.scss'

//const Dashboard = () => {
  export default class UserDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userData: "",
      };
    }
    componentDidMount() {
      fetch("http://localhost:5001/userData", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userData");
          this.setState({ userData: data.data });
        });
    }
    render(){
    return (
    <div>
      <Navbar />
      <h1>Dashboard Test</h1>
    </div>
  );
}}
//export default Dashboard;