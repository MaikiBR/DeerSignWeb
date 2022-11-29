//import React, { useState } from "react";
import React, { useState } from "react";
import { getDatabase, ref, set , push, update} from "firebase/database";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "../Firebase";


import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../SCSS/Elements/_adduser.scss'



const successAlert = () => {
    toast.success("Creación de usuario exitosa.", {
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
    toast.error("Ocurrio algun error", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,

    });
  }

function SignUp() {
    const navigate = useNavigate();

    const [fname, setFName] = useState("")
    const [lnameP, setLnameP] = useState("")
    const [lnameM, setlnameM] = useState("")
    const [areaL, setAreaL] = useState("")
    const [userN, setUserN] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [adminBox, setadminBox] = useState("")


    const db = getDatabase();
    const dbRef = ref(db, 'John Deere/Empleados');


    const checkbox = document.getElementById('myCheckbox')



    const dbRefABC1 = ref(db, 'John Deere/Categorias/ABC/ABC I');
    const dbRefABC2 = ref(db, 'John Deere/Categorias/ABC/ABC II');
    const dbRefABC3 = ref(db, 'John Deere/Categorias/ABC/ABC III');
    const dbRefABC4 = ref(db, 'John Deere/Categorias/ABC/ABC IV');
    const dbRefABC5 = ref(db, 'John Deere/Categorias/ABC/ABC V');
    const dbRefABCP = ref(db, 'John Deere/Categorias/ABC/progress');

    const dbRefANI1 = ref(db, 'John Deere/Categorias/ANIMALES/ANIMALES I');
    const dbRefANI2 = ref(db, 'John Deere/Categorias/ANIMALES/ANIMALES II');
    const dbRefANI3 = ref(db, 'John Deere/Categorias/ANIMALES/ANIMALES III');
    const dbRefANI4 = ref(db, 'John Deere/Categorias/ANIMALES/ANIMALES IV');
    const dbRefANI5 = ref(db, 'John Deere/Categorias/ANIMALES/ANIMALES V');
    const dbRefANIP = ref(db, 'John Deere/Categorias/ANIMALES/progress');

    const dbRefCOL1 = ref(db, 'John Deere/Categorias/COLORES/COLORES I');
    const dbRefCOL2 = ref(db, 'John Deere/Categorias/COLORES/COLORES II');
    const dbRefCOLP = ref(db, 'John Deere/Categorias/COLORES/progress');

    const dbRefCOM1 = ref(db, 'John Deere/Categorias/COMIDA/COMIDA I');
    const dbRefCOM2 = ref(db, 'John Deere/Categorias/COMIDA/COMIDA II');
    const dbRefCOM3 = ref(db, 'John Deere/Categorias/COMIDA/COMIDA III');
    const dbRefCOM4 = ref(db, 'John Deere/Categorias/COMIDA/COMIDA IV');
    const dbRefCOM5 = ref(db, 'John Deere/Categorias/COMIDA/COMIDA V');
    const dbRefCOMP = ref(db, 'John Deere/Categorias/COMIDA/progress');

    const dbRefCUE1 = ref(db, 'John Deere/Categorias/CUERPO/CUERPO I');
    const dbRefCUE2 = ref(db, 'John Deere/Categorias/CUERPO/CUERPO II');
    const dbRefCUE3 = ref(db, 'John Deere/Categorias/CUERPO/CUERPO III');
    const dbRefCUEP = ref(db, 'John Deere/Categorias/CUERPO/progress');

    const dbRefDIA1 = ref(db, 'John Deere/Categorias/DIAS/DIAS I');
    const dbRefDIAP = ref(db, 'John Deere/Categorias/DIAS/progress');

    const dbRefFRU1 = ref(db, 'John Deere/Categorias/FRUTAS/FRUTAS I');
    const dbRefFRU2 = ref(db, 'John Deere/Categorias/FRUTAS/FRUTAS II');
    const dbRefFRU3 = ref(db, 'John Deere/Categorias/FRUTAS/FRUTAS III');
    const dbRefFRU4 = ref(db, 'John Deere/Categorias/FRUTAS/FRUTAS IV');
    const dbRefFRUP = ref(db, 'John Deere/Categorias/FRUTAS/progress');

    const dbRefHOG1 = ref(db, 'John Deere/Categorias/HOGAR/HOGAR I');
    const dbRefHOG2 = ref(db, 'John Deere/Categorias/HOGAR/HOGAR II');
    const dbRefHOG3 = ref(db, 'John Deere/Categorias/HOGAR/HOGAR III');
    const dbRefHOG4 = ref(db, 'John Deere/Categorias/HOGAR/HOGAR IV');
    const dbRefHOG5 = ref(db, 'John Deere/Categorias/HOGAR/HOGAR V');
    const dbRefHOGP = ref(db, 'John Deere/Categorias/HOGAR/progress');

    const dbRefLUG1 = ref(db, 'John Deere/Categorias/LUGARES/LUGARES I');
    const dbRefLUG2 = ref(db, 'John Deere/Categorias/LUGARES/LUGARES II');
    const dbRefLUG3 = ref(db, 'John Deere/Categorias/LUGARES/LUGARES III');
    const dbRefLUG4 = ref(db, 'John Deere/Categorias/LUGARES/LUGARES IV');
    const dbRefLUGP = ref(db, 'John Deere/Categorias/LUGARES/progress');

    const dbRefMES1 = ref(db, 'John Deere/Categorias/MESES/MESES I');
    const dbRefMES2 = ref(db, 'John Deere/Categorias/MESES/MESES II');
    const dbRefMESP = ref(db, 'John Deere/Categorias/MESES/progress');

    const dbRefNUM1 = ref(db, 'John Deere/Categorias/NUMERO/NUMERO I');
    const dbRefNUM2 = ref(db, 'John Deere/Categorias/NUMERO/NUMERO II');
    const dbRefNUM3 = ref(db, 'John Deere/Categorias/NUMERO/NUMERO III');
    const dbRefNUM4 = ref(db, 'John Deere/Categorias/NUMERO/NUMERO IV');
    const dbRefNUM5 = ref(db, 'John Deere/Categorias/NUMERO/NUMERO V');
    const dbRefNUM6 = ref(db, 'John Deere/Categorias/NUMERO/NUMERO VI');
    const dbRefNUM7 = ref(db, 'John Deere/Categorias/NUMERO/NUMERO VII');
    const dbRefNUM8 = ref(db, 'John Deere/Categorias/NUMERO/NUMERO VIII');
    const dbRefNUMP = ref(db, 'John Deere/Categorias/NUMERO/progress');

    const dbRefOFI1 = ref(db, 'John Deere/Categorias/OFICIOS/OFICIOS I');
    const dbRefOFI2 = ref(db, 'John Deere/Categorias/OFICIOS/OFICIOS II');
    const dbRefOFI3 = ref(db, 'John Deere/Categorias/OFICIOS/OFICIOS III');
    const dbRefOFI4 = ref(db, 'John Deere/Categorias/OFICIOS/OFICIOS IV');
    const dbRefOFI5 = ref(db, 'John Deere/Categorias/OFICIOS/OFICIOS V');
    const dbRefOFI6 = ref(db, 'John Deere/Categorias/OFICIOS/OFICIOS VI');
    const dbRefOFIP = ref(db, 'John Deere/Categorias/OFICIOS/progress');

    const dbRefPER1 = ref(db, 'John Deere/Categorias/PERSONAS/PERSONAS I');
    const dbRefPER2 = ref(db, 'John Deere/Categorias/PERSONAS/PERSONAS II');
    const dbRefPER3 = ref(db, 'John Deere/Categorias/PERSONAS/PERSONAS III');
    const dbRefPER4 = ref(db, 'John Deere/Categorias/PERSONAS/PERSONAS IV');
    const dbRefPER5 = ref(db, 'John Deere/Categorias/PERSONAS/PERSONAS V');
    const dbRefPER6 = ref(db, 'John Deere/Categorias/PERSONAS/PERSONAS VI');
    const dbRefPER7 = ref(db, 'John Deere/Categorias/PERSONAS/PERSONAS VII');
    const dbRefPER8 = ref(db, 'John Deere/Categorias/PERSONAS/PERSONAS VIII');
    const dbRefPER9 = ref(db, 'John Deere/Categorias/PERSONAS/PERSONAS IX');
    const dbRefPER10 = ref(db, 'John Deere/Categorias/PERSONAS/PERSONAS X');
    const dbRefPER11 = ref(db, 'John Deere/Categorias/PERSONAS/PERSONAS XI');
    const dbRefPER12 = ref(db, 'John Deere/Categorias/PERSONAS/PERSONAS XII');
    const dbRefPER13 = ref(db, 'John Deere/Categorias/PERSONAS/PERSONAS XIII');
    const dbRefPERP = ref(db, 'John Deere/Categorias/PERSONAS/progress');
    
    const dbRefPRE1 = ref(db, 'John Deere/Categorias/PREGUNTAS/PREGUNTAS I');
    const dbRefPREP = ref(db, 'John Deere/Categorias/PREGUNTAS/progress');
    
    const dbRefPREP1 = ref(db, 'John Deere/Categorias/PREP/PREP I');
    const dbRefPREP2 = ref(db, 'John Deere/Categorias/PREP/PREP II');
    const dbRefPREP3 = ref(db, 'John Deere/Categorias/PREP/PREP III');
    const dbRefPREP4 = ref(db, 'John Deere/Categorias/PREP/PREP IV');
    const dbRefPREP5 = ref(db, 'John Deere/Categorias/PREP/PREP V');
    const dbRefPREP6 = ref(db, 'John Deere/Categorias/PREP/PREP VI');
    const dbRefPREP7 = ref(db, 'John Deere/Categorias/PREP/PREP VII');
    const dbRefPREP8 = ref(db, 'John Deere/Categorias/PREP/PREP VIII');
    const dbRefPREP9 = ref(db, 'John Deere/Categorias/PREP/PREP IX');
    const dbRefPREP10 = ref(db, 'John Deere/Categorias/PREP/PREP X');
    const dbRefPREP11 = ref(db, 'John Deere/Categorias/PREP/PREP XI');
    const dbRefPREP12 = ref(db, 'John Deere/Categorias/PREP/PREP XII');
    const dbRefPREP13 = ref(db, 'John Deere/Categorias/PREP/PREP XIII');
    const dbRefPREP14 = ref(db, 'John Deere/Categorias/PREP/PREP XIV');
    const dbRefPREP15 = ref(db, 'John Deere/Categorias/PREP/PREP XV');
    const dbRefPREP16 = ref(db, 'John Deere/Categorias/PREP/PREP XVI');
    const dbRefPREP17 = ref(db, 'John Deere/Categorias/PREP/PREP XVII');
    const dbRefPREP18 = ref(db, 'John Deere/Categorias/PREP/PREP XIII');
    const dbRefPREPP = ref(db, 'John Deere/Categorias/PREP/progress');

    const dbRefPRO1 = ref(db, 'John Deere/Categorias/PRONOMBRES/PRONOMBRES I');
    const dbRefPROP = ref(db, 'John Deere/Categorias/PRONOMBRES/progress');

    const dbRefROP1 = ref(db, 'John Deere/Categorias/ROPA/ROPA I');
    const dbRefROP2 = ref(db, 'John Deere/Categorias/ROPA/ROPA II');
    const dbRefROPP = ref(db, 'John Deere/Categorias/ROPA/progress');

    const dbRefSAL1 = ref(db, 'John Deere/Categorias/SALUDOS/SALUDOS I');
    const dbRefSAL2 = ref(db, 'John Deere/Categorias/SALUDOS/SALUDOS II');
    const dbRefSAL3 = ref(db, 'John Deere/Categorias/SALUDOS/SALUDOS III');
    const dbRefSALP = ref(db, 'John Deere/Categorias/SALUDOS/progress');

    const dbRefTIE1 = ref(db, 'John Deere/Categorias/TIEMPO/TIEMPO I');
    const dbRefEIE2 = ref(db, 'John Deere/Categorias/TIEMPO/TIEMPO II');
    const dbRefTIE3 = ref(db, 'John Deere/Categorias/TIEMPO/TIEMPO III');
    const dbRefTIE4 = ref(db, 'John Deere/Categorias/TIEMPO/TIEMPO IV');
    const dbRefTIE5 = ref(db, 'John Deere/Categorias/TIEMPO/TIEMPO V');
    const dbRefTIE6 = ref(db, 'John Deere/Categorias/TIEMPO/TIEMPO VI');
    const dbRefTIE7 = ref(db, 'John Deere/Categorias/TIEMPO/TIEMPO VII');
    const dbRefTIE8 = ref(db, 'John Deere/Categorias/TIEMPO/TIEMPO VIII');
    const dbRefTIEP = ref(db, 'John Deere/Categorias/TIEMPO/progress');

    const dbRefTRA1 = ref(db, 'John Deere/Categorias/TRANSPORTE/TRANSPORTE I');
    const dbRefTRA2 = ref(db, 'John Deere/Categorias/TRANSPORTE/TRANSPORTE II');
    const dbRefTRAP = ref(db, 'John Deere/Categorias/TRANSPORTE/progress');

    const dbRefVER1 = ref(db, 'John Deere/Categorias/VERBOS/VERBOS I');
    const dbRefVER2 = ref(db, 'John Deere/Categorias/VERBOS/VERBOS II');
    const dbRefVER3 = ref(db, 'John Deere/Categorias/VERBOS/VERBOS III');
    const dbRefVERP = ref(db, 'John Deere/Categorias/VERBOS/progress');

    const dbRefVED1 = ref(db, 'John Deere/Categorias/VERDURAS/VERDURAS I');
    const dbRefVED2 = ref(db, 'John Deere/Categorias/VERDURAS/VERDURAS II');
    const dbRefVED3 = ref(db, 'John Deere/Categorias/VERDURAS/VERDURAS III');
    const dbRefVEDP = ref(db, 'John Deere/Categorias/VERDURAS/progress');

    const register = () =>{
        //mGroupId = mGroupRef.push().getKey();

        push(dbRef, {
            apellido: lnameP,
            area: areaL,
            email: email,
            nombre: fname,
            progreso: 0,
            username:userN
            })
            .then((snap) => {
                const key2 = snap.key;
                console.log(key2);
                update(dbRefABC1, {[key2]: false});
                update(dbRefABC2, {[key2]: false});
                update(dbRefABC3, {[key2]: false});
                update(dbRefABC4, {[key2]: false});
                update(dbRefABC5, {[key2]: false});
                update(dbRefABCP, {[key2]: 0});

                update(dbRefANI1, {[key2]: false});
                update(dbRefANI2, {[key2]: false});
                update(dbRefANI3, {[key2]: false});
                update(dbRefANI4, {[key2]: false});
                update(dbRefANI5, {[key2]: false});
                update(dbRefANIP, {[key2]: 0});

                update(dbRefCOL1, {[key2]: false});
                update(dbRefCOL2, {[key2]: false});
                update(dbRefCOLP, {[key2]: 0});

                update(dbRefCOM1, {[key2]: false});
                update(dbRefCOM2, {[key2]: false});
                update(dbRefCOM3, {[key2]: false});
                update(dbRefCOM4, {[key2]: false});
                update(dbRefCOM5, {[key2]: false});
                update(dbRefCOMP, {[key2]: 0});
                
                update(dbRefCUE1, {[key2]: false});
                update(dbRefCUE2, {[key2]: false});
                update(dbRefCUE3, {[key2]: false});
                update(dbRefCUEP, {[key2]: 0});

                update(dbRefDIA1, {[key2]: false});
                update(dbRefDIAP, {[key2]: 0});

                update(dbRefFRU1, {[key2]: false});
                update(dbRefFRU2, {[key2]: false});
                update(dbRefFRU3, {[key2]: false});
                update(dbRefFRU4, {[key2]: false});
                update(dbRefFRUP, {[key2]: 0});

                update(dbRefHOG1, {[key2]: false});
                update(dbRefHOG2, {[key2]: false});
                update(dbRefHOG3, {[key2]: false});
                update(dbRefHOG4, {[key2]: false});
                update(dbRefHOG5, {[key2]: false});
                update(dbRefHOGP, {[key2]: 0});

                update(dbRefLUG1, {[key2]: false});
                update(dbRefLUG2, {[key2]: false});
                update(dbRefLUG3, {[key2]: false});
                update(dbRefLUG4, {[key2]: false});
                update(dbRefLUGP, {[key2]: 0});

                update(dbRefMES1, {[key2]: false});
                update(dbRefMES2, {[key2]: false});
                update(dbRefMESP, {[key2]: 0});

                update(dbRefNUM1, {[key2]: false});
                update(dbRefNUM2, {[key2]: false});
                update(dbRefNUM3, {[key2]: false});
                update(dbRefNUM4, {[key2]: false});
                update(dbRefNUM5, {[key2]: false});
                update(dbRefNUM6, {[key2]: false});
                update(dbRefNUM7, {[key2]: false});
                update(dbRefNUM8, {[key2]: false});
                update(dbRefNUMP, {[key2]: 0});

                update(dbRefOFI1, {[key2]: false});
                update(dbRefOFI2, {[key2]: false});
                update(dbRefOFI3, {[key2]: false});
                update(dbRefOFI4, {[key2]: false});
                update(dbRefOFI5, {[key2]: false});
                update(dbRefOFI6, {[key2]: false});
                update(dbRefOFIP, {[key2]: 0});

                update(dbRefPER1, {[key2]: false});
                update(dbRefPER2, {[key2]: false});
                update(dbRefPER3, {[key2]: false});
                update(dbRefPER4, {[key2]: false});
                update(dbRefPER5, {[key2]: false});
                update(dbRefPER6, {[key2]: false});
                update(dbRefPER7, {[key2]: false});
                update(dbRefPER8, {[key2]: false});
                update(dbRefPER10, {[key2]: false});
                update(dbRefPER11, {[key2]: false});
                update(dbRefPER12, {[key2]: false});
                update(dbRefPER13, {[key2]: false});
                update(dbRefPERP, {[key2]: 0});

                update(dbRefPRE1, {[key2]: false});
                update(dbRefPREP, {[key2]: 0});


                update(dbRefPREP1, {[key2]: false});
                update(dbRefPREP2, {[key2]: false});
                update(dbRefPREP3, {[key2]: false});
                update(dbRefPREP4, {[key2]: false});
                update(dbRefPREP5, {[key2]: false});
                update(dbRefPREP6, {[key2]: false});
                update(dbRefPREP7, {[key2]: false});
                update(dbRefPREP8, {[key2]: false});
                update(dbRefPREP9, {[key2]: false});
                update(dbRefPREP10, {[key2]: false});
                update(dbRefPREP11, {[key2]: false});
                update(dbRefPREP12, {[key2]: false});
                update(dbRefPREP13, {[key2]: false});
                update(dbRefPREP14, {[key2]: false});
                update(dbRefPREP15, {[key2]: false});
                update(dbRefPREP16, {[key2]: false});
                update(dbRefPREP17, {[key2]: false});
                update(dbRefPREP18, {[key2]: false});
                update(dbRefPREPP, {[key2]: 0});

                update(dbRefPRO1, {[key2]: false});
                update(dbRefPROP, {[key2]: 0});

                update(dbRefROP1, {[key2]: false});
                update(dbRefROP2, {[key2]: false});
                update(dbRefROPP, {[key2]: 0});


                update(dbRefSAL1, {[key2]: false});
                update(dbRefSAL2, {[key2]: false});
                update(dbRefSAL3, {[key2]: false});
                update(dbRefSALP, {[key2]: 0});

                
                update(dbRefTIE1, {[key2]: false});
                update(dbRefEIE2, {[key2]: false});
                update(dbRefTIE3, {[key2]: false});
                update(dbRefTIE4, {[key2]: false});
                update(dbRefTIE5, {[key2]: false});
                update(dbRefTIE6, {[key2]: false});
                update(dbRefTIE7, {[key2]: false});
                update(dbRefTIE8, {[key2]: false});
                update(dbRefTIEP, {[key2]: 0});

                update(dbRefTRA1, {[key2]: false});
                update(dbRefTRA2, {[key2]: false});
                update(dbRefTRAP, {[key2]: 0});

                update(dbRefVER1, {[key2]: false});
                update(dbRefVER2, {[key2]: false});
                update(dbRefVER3, {[key2]: false});
                update(dbRefVERP, {[key2]: 0});

                update(dbRefVED1, {[key2]: false});
                update(dbRefVED2, {[key2]: false});
                update(dbRefVED3, {[key2]: false});
                update(dbRefVEDP, {[key2]: 0});

            })

        createUserWithEmailAndPassword(auth, email, password)
            .then(auth => {navigate('/dashboard')})
            .catch(error => errorAlert())
            
    }



    return (
        
        <div>
        <Navbar />
        <div className="add-content">
        <ToastContainer />
            <div className="container">
                <div className="page-title">AGREGAR USUARIO</div>
                <form>
                    <div className="user-details">
                        <div className="input-container">
                            <span className="input-span">Nombre(s)</span>
                            <input className="input-field" onChange={(event) => setFName(event.target.value)} type="text" placeholder="Ingresa el nombre" required />
                        </div>
                        <div className="input-container">
                            <span className="input-span">Apellido paterno</span>
                            <input className="input-field" onChange={(event) => setLnameP(event.target.value)} type="text" placeholder="Ingresa el apellido paterno" required />
                        </div>
                        <div className="input-container">
                            <span className="input-span">Apellido materno</span>
                            <input className="input-field" onChange={(event) => setlnameM(event.target.value)} type="text" placeholder="Ingresa el apellido materno" required />
                        </div>
                        <div className="input-container">
                            <span className="input-span">Área laboral</span>
                            <input className="input-field" onChange={(event) => setAreaL(event.target.value)} type="text" placeholder="Ingresa el area laboral"  required />
                        </div>
                        <div className="input-container">
                            <span className="input-span">Nombre de usuario</span>
                            <input className="input-field" onChange={(event) => setUserN(event.target.value)} type="text" placeholder="Ingresa el nombre de usuario"  required />
                        </div>
                        <div className="input-container">
                            <span className="input-span">Correo electrónico</span>
                            <input className="input-field" onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Ingresa el correo electrónico" required />
                        </div>
                        <div className="input-container">
                            <span className="input-span">Contraseña</span>
                            <input className="input-field" onChange={(event) => setPassword(event.target.value)} type="text" placeholder="Ingresa la contraseña"  required />
                        </div>
                        <div className="input-container">
                            <label><input className="admin-input" id="myCheckbox" type="checkbox"/> Administrador   </label>
                        </div>
                        
                        <div>
                            <input className="add-button" onClick={register} type="submit" value="Añadir"/>
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
export default SignUp;