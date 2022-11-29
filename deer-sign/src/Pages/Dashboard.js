//import React, { useState } from "react";
import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import {Bar, Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import BarChart from "../Components/barChart";
import {CategoryScale} from 'chart.js'; 

import DonutChart from "../Components/doughnutChart";
import '../SCSS/Elements/_dashboard.scss'

Chart.register(CategoryScale);

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
          localStorage.setItem("username", data.data.userN);
          this.setState({ userData: data.data });
        });
    }
    render(){
    return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <DonutChart/>
        <BarChart />

        <div class="myTable">
          <table class="table" id="ex-table">
          <thead class="thead-light">
            <tr id="tr">
              <th scope="col">ID Empleado</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Area</th>
              <th scope="col">Avance</th>
              <th scope="col">Ultimo Avance</th>
              <th scope="col">Ver</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          </table>
        </div>
      </div>
    </div>
  );
}}
//export default Dashboard;