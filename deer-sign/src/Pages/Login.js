import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Media/LOGO_verde.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAsterisk } from '@fortawesome/free-solid-svg-icons'

import '../SCSS/Elements/_login.scss'

const Login = () => {
  const navigate = useNavigate();

  const logUser = () => {
    navigate("/dashboard");
  }

  return (
    <div className="body">
      <div className="login-container">
        <img 
          src={logo}
          width="30%"
          height="30%"
          className="login-logo"
        />
        <div className="login-input-container">
          <input type="email" placeholder="Email"/>
          <FontAwesomeIcon icon={faUser} className="login-icons"/>
        </div>
        <div className="login-input-container">
          <input type="password" placeholder="Password"/>
          <FontAwesomeIcon icon={faAsterisk} className="login-icons"/>
        </div>

        <button type="submit" onClick={() => logUser()}>ENTRAR</button>
      </div>
    </div>
  );
}
export default Login;