//import React, { useState } from "react";

//import React, { Component, useState } from "react";
//import {useState} from 'react';
//import { Navigate, useNavigate } from "react-router-dom";

import { useState } from "react";
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";


import logo from "../Media/LOGO_verde.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAsterisk } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../SCSS/Elements/_login.scss'

//import {auth} from '../Components/firebaseConfig/index.js'
/* import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"; */

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

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    try{
      signInWithEmailAndPassword(auth, email, password)
       .then(auth => {navigate('/dashboard')})
       .catch(error => errorAlert())
    } catch(error){
      console.log(error.message);
      errorAlert();
    }
  }

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
        <div>
        <div className="login-input-container">
          <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} autoComplete = "off" />
          <FontAwesomeIcon icon={faUser} className="login-icons"/>
        </div>
        <div className="login-input-container">
          <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} autoComplete = "off" />
          <FontAwesomeIcon icon={faAsterisk} className="login-icons"/>
        </div>
        <div className="login-button-container">
          <button onClick={signIn} className="login-button" type="submit" >ENTRAR</button>
        </div>
        </div>
      </div>
      
    </div>
    
  );

}

export default Login;