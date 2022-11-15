//import React, { useState } from "react";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Media/LOGO_verde.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAsterisk } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../SCSS/Elements/_login.scss'

//const Login = () => {
  
  const successAlert = () => {
    toast.success("Login exitoso. Bienvenido!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,

    });
  }

  const errorAlert = () => {
    toast.error("Los datos ingresados no corresponden a un usuario registrado. Vuelve a intentarlo.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,

    });
  }
  //const logUser = () => { navigate("/dashboard"); }
  
export default class Login extends Component {
  
    //---------
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      e.preventDefault();
      const { email, password } = this.state;
      console.log(email, password);
      fetch("http://localhost:5001/login-user", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister1");
          if (data.status == "ok") {
            successAlert();
            window.localStorage.setItem("token", data.data);
            setTimeout(() => {
              window.location.href = "./dashboard";
            }, 3600);
          }
        }, (error) => {
          errorAlert();
          console.log(error);
        });
    }
  render (){
  return (
    
    <div className="body">
      <div className="login-container">
      <ToastContainer />
        <img 
          src={logo}
          width="30%"
          height="30%"
          className="login-logo"
        />
        <form onSubmit={this.handleSubmit}>
        <div className="login-input-container">
          <input type="email" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
          <FontAwesomeIcon icon={faUser} className="login-icons"/>
        </div>
        <div className="login-input-container">
          <input type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })}/>
          <FontAwesomeIcon icon={faAsterisk} className="login-icons"/>
        </div>
        <div className="login-button-container">
          <button className="login-button" type="submit" >ENTRAR</button>
        </div>
        </form>
      </div>
      
    </div>
    
  );
}
}
//export default Login;