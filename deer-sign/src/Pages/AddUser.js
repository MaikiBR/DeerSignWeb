//import React, { useState } from "react";
import React, { Component } from "react";

import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


import '../SCSS/Elements/_adduser.scss'

export default class SignUp extends Component {
    ///
    constructor(props) {
      super(props);
      this.state = {
        fname : "",
        lnameP : "",
        lnameM : "",
        areaL : "",
        userN : "",
        email : "",
        password : ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    //
    handleSubmit(e) {
      e.preventDefault();
      const { fname,lnameP,lnameM,areaL,userN,email,password } = this.state;
      console.log(fname, lnameP, lnameM, areaL, userN, email, password);
      fetch("http://localhost:5001/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            fname,
            lnameP,
            lnameM,
            areaL,
            userN,
            email,
            password
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister2");
        });
    }
    render(){
    return (
        
        <div>
        <Navbar />
        <div className="add-content">
            <div className="container">
                <div className="page-title">AGREGAR USUARIO</div>
                <form onSubmit={this.handleSubmit}>
                    <div className="user-details">
                        <div className="input-container">
                            <span className="input-span">Nombre(s)</span>
                            <input className="input-field" type="text" placeholder="Ingresa el nombre" onChange={(e) => this.setState({ fname : e.target.value })} required />
                        </div>
                        <div className="input-container">
                            <span className="input-span">Apellido paterno</span>
                            <input className="input-field" type="text" placeholder="Ingresa el apellido paterno" onChange={(e) => this.setState({ lnameP: e.target.value })} required />
                        </div>
                        <div className="input-container">
                            <span className="input-span">Apellido materno</span>
                            <input className="input-field" type="text" placeholder="Ingresa el apellido materno" onChange={(e) => this.setState({ lnameM: e.target.value })} required />
                        </div>
                        <div className="input-container">
                            <span className="input-span">Área laboral</span>
                            <input className="input-field" type="text" placeholder="Ingresa el area laboral" onChange={(e) => this.setState({ areaL: e.target.value })} required />
                        </div>
                        <div className="input-container">
                            <span className="input-span">Nombre de usuario</span>
                            <input className="input-field" type="text" placeholder="Ingresa el nombre de usuario" onChange={(e) => this.setState({ userN: e.target.value })} required />
                        </div>
                        <div className="input-container">
                            <span className="input-span">Correo electrónico</span>
                            <input className="input-field" type="email" placeholder="Ingresa el correo electrónico" onChange={(e) => this.setState({ email: e.target.value })} required />
                        </div>
                        <div className="input-container">
                            <span className="input-span">Contraseña</span>
                            <input className="input-field" type="text" placeholder="Ingresa la contraseña" onChange={(e) => this.setState({ password: e.target.value })} required />
                        </div>
                        <div className="input-container">
                            <label><input className="admin-input" type="checkbox"/> Administrador </label>
                        </div>

                        <div>
                            <input className="add-button" type="submit" value="Añadir"/>
                        </div>
                        <div>
                            <input className="upload-button" type="submit" value="Subir archivo"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>

    );
    }
}
//export default AddUser;