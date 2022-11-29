//import React, { useState } from "react";
import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import {Bar, Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import BarChart from "../Components/barChart";
import {CategoryScale} from 'chart.js'; 
import DonutChart from "../Components/doughnutChart";
import '../SCSS/Elements/_dashboard.scss'
import StartFirebase from "../Components/firebaseConfig/index";
import {ref, onValue} from 'firebase/database';
import {Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faX } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from "react-router-dom";

const db = StartFirebase();


Chart.register(CategoryScale);

function showUserData(userData){
  var userNombre = userData.nombre;
  var userApellido = userData.apellido;
  localStorage.setItem("userNombre", userNombre);
  //console.log(userNombre);
  localStorage.setItem("userApellido", userApellido);
  //console.log(userApellido);
}

//const Dashboard = () => {
  export class RealtimeData extends React.Component {

    constructor(){
      super();
      this.state = {
          tableData: []
      }
  }
    componentDidMount() {
      const dbRef = ref(db, 'John Deere/Empleados');

        onValue(dbRef, (snapshot)=>{
            let records =[];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName, "data":data});
                //console.log(data);
            });
            this.setState({tableData:records});
        });
    }
    render(){
    return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <DonutChart/>
        <BarChart />
      </div>

        <Table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>ID Empleado</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Area</th>
                        <th>Avance</th>
                        <th>Ultima vez</th>
                        <th>Ver</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.tableData.map((row,index)=>{
                        return(
                        <tr>
                            <td>{row.data.username}</td>
                            <td>{row.data.nombre}</td>
                            <td>{row.data.apellido}</td>
                            <td>{row.data.area}</td>
                            <td><div className="progressBar">
       <ProgressBar now={row.data.avance} />
    </div></td>                            <td>{row.data.ultvez}</td>
                            <td><Link to="/userdata" onClick={() => showUserData(row.data)}><button><FontAwesomeIcon icon={faChartSimple}/></button></Link></td>
                            <td><button><FontAwesomeIcon icon={faX}/> </button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
    </div>
  )
}}
//export default Dashboard;