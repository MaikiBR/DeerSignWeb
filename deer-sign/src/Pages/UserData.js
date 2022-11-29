import React, { Component } from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import DonutUserChart from "../Components/doughnutUserChart";
import Navbar from "../Components/Navbar/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, faA, faAppleWhole, faBriefcase, faCalendarDays, faCalendarWeek, faCarrot, faCircleQuestion, faClock, faFileLines, faFutbol, faHandshake, faHouseChimneyWindow, faLocationDot, faMugSaucer, faPalette, faPaw, faPeopleGroup, faPerson, faPersonRunning, faScrewdriverWrench, faShirt, faUtensils, faVanShuttle, faVenusMars, faZ } from "@fortawesome/free-solid-svg-icons";

import '../SCSS/Elements/_userdata.scss'




export default class UserData extends Component {
    render(){
        var userNombre = localStorage.getItem("userNombre");
        var userApellido = localStorage.getItem("userApellido");
        var userFullname = userNombre + " " + userApellido;
        return (
            <div>
                <Navbar />
                <div className="userdata-container">
                    <div className="userfullname-container">
                        <h1>{userFullname}</h1>
                    </div>
                    <div className="sections-container">
                        <div class='row'>
                        <div class="col-md-5">
                                <div class='row'>
                                    <div id="first-section" class="col-md-12">
                                        <br />
                                        <span className="section-spans">ACTIVIDAD ÚLTIMOS 5 DÍAS</span>
                                        <div className="week-container">
                                            <div className="week-container-first">
                                                <Card className="week-card week" sx={{ width: 100, height: 50}}>
                                                    <CardContent>
                                                        LUN
                                                    </CardContent>
                                                </Card>
                                                <Card className="week-card week" sx={{ width: 100, height: 50}}>
                                                    <CardContent>
                                                        MAR
                                                    </CardContent>
                                                </Card>
                                                <Card className="week-card week" sx={{ width: 100, height: 50}}>
                                                    <CardContent>
                                                        MIE
                                                    </CardContent>
                                                </Card>
                                                <Card className="week-card week" sx={{ width: 100, height: 50}}>
                                                    <CardContent>
                                                        JUE
                                                    </CardContent>
                                                </Card>
                                                <Card className="week-card week" sx={{ width: 100, height: 50}}>
                                                    <CardContent>
                                                        VIE
                                                    </CardContent>
                                                </Card>
                                            </div>
                                            <div className="week-container-second">
                                            <Card className="week-card" sx={{ width: 100, height: 150}}>
                                                    <CardContent>
                                                        
                                                    </CardContent>
                                                </Card>
                                                <Card className="week-card" sx={{ width: 100, height: 150}}>
                                                    <CardContent>
                                                        
                                                    </CardContent>
                                                </Card>
                                                <Card className="week-card" sx={{ width: 100, height: 150}}>
                                                    <CardContent>
                                                        
                                                    </CardContent>
                                                </Card>
                                                <Card className="week-card" sx={{ width: 100, height: 150}}>
                                                    <CardContent>
                                                        
                                                    </CardContent>
                                                </Card>
                                                <Card className="week-card" sx={{ width: 100, height: 150}}>
                                                    <CardContent>
                                                        
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="second-section" class="col-md-12">
                                        <span className="section-spans">PROGRESO DE ACTIVIDADES</span>
                                        <DonutUserChart/>
                                    </div>
                                </div>
                            </div>
                            <div id="third-section" class="col-md-6">
                                <br />
                                <span id="third-span" className="section-spans">AVANCE POR CATEGORÍAS</span>
                                <div className="categories-container">
                                    <div className="categories-container-first">
                                        <Card id="colors-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px"}} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faPalette} className="card-icon"/>
                                                <Typography className="card-title">COLORES</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="abc-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faA} className="card-icon"/>
                                                <FontAwesomeIcon icon={faZ} className="card-icon"/>
                                                <Typography className="card-title">ABC</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="sports-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faFutbol} className="card-icon"/>
                                                <Typography className="card-title">DEPORTES</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="food-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faUtensils} className="card-icon"/>
                                                <Typography className="card-title">COMIDA</Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="categories-container-second">
                                        <Card id="verbs-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faPersonRunning} className="card-icon"/>
                                                <Typography className="card-title">VERBOS</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="verbs-card-two" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faPersonRunning} className="card-icon"/>
                                                <Typography className="card-title">VERBOS</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="drinks-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faMugSaucer} className="card-icon"/>
                                                <Typography className="card-title">BEBIDAS</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="animals-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faPaw} className="card-icon"/>
                                                <Typography className="card-title">ANIMALES</Typography>
                                            </CardContent>
                                        </Card>                                        
                                    </div>
                                    <div className="categories-container-first">
                                        <Card id="body-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px"}} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faPerson} className="card-icon"/>
                                                <Typography className="card-title">CUERPO</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="days-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faCalendarWeek} className="card-icon"/>
                                                <Typography className="card-title">DIAS</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="fruits-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faAppleWhole} className="card-icon"/>
                                                <Typography className="card-title">FRUTAS</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="vegies-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faCarrot} className="card-icon"/>
                                                <Typography className="card-title">VERDURAS</Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="categories-container-second">
                                        <Card id="places-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faLocationDot} className="card-icon"/>
                                                <Typography className="card-title">LUGARES</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="months-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faCalendarDays} className="card-icon"/>
                                                <Typography className="card-title">MESES</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="num-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={fa1} className="card-icon num"/>
                                                <FontAwesomeIcon icon={fa2} className="card-icon num"/>
                                                <FontAwesomeIcon icon={fa3} className="card-icon num"/>
                                                <Typography className="card-title">NUMEROS</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="house-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faHouseChimneyWindow} className="card-icon"/>
                                                <Typography className="card-title">HOGAR</Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="categories-container-first">
                                        <Card id="people-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px"}} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faPeopleGroup} className="card-icon"/>
                                                <Typography className="card-title">PERSONAS</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="questions-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faCircleQuestion} className="card-icon"/>
                                                <Typography className="card-title">PREGUNTAS</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="prep-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faFileLines} className="card-icon"/>
                                                <Typography className="card-title">PREPOSICIONES</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="pron-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faVenusMars} className="card-icon"/>
                                                <Typography className="card-title">PRONOMBRES</Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="categories-container-second">
                                        <Card id="work-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faBriefcase} className="card-icon"/>
                                                <Typography className="card-title">OFICIOS</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="clothes-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faShirt} className="card-icon"/>
                                                <Typography className="card-title">ROPA</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="time-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faClock} className="card-icon num"/>
                                                <Typography className="card-title">TIEMPO</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="transport-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faVanShuttle} className="card-icon"/>
                                                <Typography className="card-title">TRANSPORTE</Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="categories-container-first">
                                        <Card id="greetings-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faHandshake} className="card-icon"/>
                                                <Typography className="card-title">SALUDOS</Typography>
                                            </CardContent>
                                        </Card>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}