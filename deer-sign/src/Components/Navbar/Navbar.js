import logo from "../../Media/LOGO_blanco.png"
import '../../SCSS/Components/_navbar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate();
    
    const logoutUser = () => {
        //localStorage.removeItem("token");
        //localStorage.setItem("isAuthenticated", "false");
        navigate("/");
    }

    return (
        <>
            <nav>
                <a href="/dashboard">
                    <img
                        src={logo}
                        width="155px"
                        height="105px"
                        id="deersign-logo"
                        alt="logo deer sign"
                    />
                </a>

                <div>
                    <ul id="navbar">
                        <li><a href="/agregaruser">Agregar</a></li>
                        <li><span>Hola, Usuario</span></li>
                        <li onClick={() => logoutUser()}><FontAwesomeIcon icon={faRightFromBracket} id="logout-icon"/></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;