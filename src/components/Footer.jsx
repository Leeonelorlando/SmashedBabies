import React from "react";
import './estilos.css';
import whatsapp from "./images/SM-RRSS-01.png";
import instagram from "./images/SM-RRSS-03.png";
import facebook from "./images/SM-RRSS-04.png";

const Footer = () => {
        return (
            <div className="row fondo_marron p-5">
            <div className="col">
                <div className="container text-white">
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p>TM © 2021 Burger King Corporation. Todos los derechos reservados.</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <img src={facebook} width="24" alt="facebook" /> 
                            <img src={instagram} width="24" alt="instagram" /> 
                            <img src={whatsapp} width="24" alt="whatsapp" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;