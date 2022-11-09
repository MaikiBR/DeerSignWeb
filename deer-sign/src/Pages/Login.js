import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import '../SCSS/_login.scss'

const Login = () => {
  return (
    <div>

    <div class="imagen">    
      <img src="logoini.png" alt=""/>
    </div>
  
   
      <form>
        <h1>Iniciar sesión</h1>
    
        <div class="forms">
          <i class='fa fa-envelope'></i>
          <input type="email" id="floatingInput" placeholder="Email"/>
        </div>

        <div class="forms">
          <i class='fa fa-key'></i>
          <input type="password"  id="floatingPassword" placeholder="Password"/>
        </div>
    
        <div class="forms">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <div class="boton">
          <button type="submit">Iniciar Sesion</button>
        </div>
      </form>


  </div>
  );
}
export default Login;