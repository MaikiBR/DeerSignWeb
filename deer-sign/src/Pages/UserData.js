import React, { Component } from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import DonutUserChart from "../Components/doughnutUserChart";
import Navbar from "../Components/Navbar/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faFutbol, faMugSaucer, faPalette, faPaw, faPersonRunning, faScrewdriverWrench, faUtensils, faZ } from "@fortawesome/free-solid-svg-icons";

import '../SCSS/Elements/_userdata.scss'

/*var userNombre = localStorage.getItem("userNombre");
var userApellido = localStorage.getItem("userApellido");*/

export default class UserData extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className="userdata-container">
                    <div className="userfullname-container">
                        <h1>GRACE HOPPER</h1>
                    </div>
                    <div className="sections-container">
                        <div class='row'>
                        <div class="col-md-5">
                                <div class='row'>
                                    <div id="first-section" class="col-md-12">
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
                                        <Card id="drinks-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faMugSaucer} className="card-icon"/>
                                                <Typography className="card-title">BEBIDAS</Typography>
                                            </CardContent>
                                        </Card>
                                        <Card id="tools-card" sx={{ width: 180, height: 180, boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 5px" }} className="category-card">
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 600 }} className="card-progress">0/3</Typography>
                                                <FontAwesomeIcon icon={faScrewdriverWrench} className="card-icon"/>
                                                <Typography className="card-title">HERRAMIENTAS</Typography>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}