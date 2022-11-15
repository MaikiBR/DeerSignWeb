//import React, { useState } from "react";
import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import {Bar, Doughnut} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import '../SCSS/Elements/_dashboard.scss'

Chart.register(CategoryScale);

const barData = {
  labels : [
    'January',
    'February',
    'March',
  ],
  datasets: [{
    indexAxis: 'y',
    data: [65, 59, 80],
    fill: false,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)'
    ],
    borderWidth: 1
  }]
};

const doughnutData = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};


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
        <div className="chart-container">

        </div>

        <div className="doughnut-chart-container">
          <Doughnut 
            data={doughnutData}
            options={{
              title:{
                display:true,
                text:'Doughnut Data Chart',
                fontSize:20
            }}}
          />
        </div>

        <div className="bar-chart-container">
        <Bar
          data={barData}
          options={{
            title:{
              display:true,
              indexAxis: 'y',
              text:'Bar Data Chart',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>

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