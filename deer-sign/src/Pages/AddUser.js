import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


import '../SCSS/Elements/_adduser.scss'

const AddUser = () => {
  return (
    <div>
      <Navbar />
      <div className="add-content">
        <div className="container">
            <div className="page-title">AGREGAR USUARIO</div>
            <form>
                <div className="user-details">
                    <div className="input-container">
                        <span className="input-span">Nombre(s)</span>
                        <input className="input-field" type="text" placeholder="Ingresa el nombre" required/>
                    </div>
                    <div className="input-container">
                        <span className="input-span">Apellido paterno</span>
                        <input className="input-field" type="text" placeholder="Ingresa el apellido paterno" required/>
                    </div>
                    <div className="input-container">
                        <span className="input-span">Apellido materno</span>
                        <input className="input-field" type="text" placeholder="Ingresa el apellido materno" required/>
                    </div>
                    <div className="input-container">
                        <span className="input-span">Área laboral</span>
                        <input className="input-field" type="text" placeholder="Ingresa el area laboral" required/>
                    </div>
                    <div className="input-container">
                        <span className="input-span">Nombre de usuario</span>
                        <input className="input-field" type="text" placeholder="Ingresa el nombre de usuario" required/>
                    </div>
                    <div className="input-container">
                        <span className="input-span">Correo electrónico</span>
                        <input className="input-field" type="email" placeholder="Ingresa el correo electrónico" required/>
                    </div>
                    <div className="input-container">
                        <span className="input-span">Contraseña</span>
                        <input className="input-field" type="text" placeholder="Ingresa la contraseña" required/>
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
export default AddUser;