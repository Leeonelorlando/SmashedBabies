import React from "react";
import imagen from "./images/HomeBanner_STACKERXL-27.jpg";

const Destacado = () => {
    return (
        <div className="text-center">
           <img src={imagen} alt="Promoción Destacada" className="img-fluid" /> 
        </div>
        
    )
}

export default Destacado;