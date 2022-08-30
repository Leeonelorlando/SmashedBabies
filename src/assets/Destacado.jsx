import React from "react";
import imagen from "./images/HISTORIA SMASH BABY LA REINA DE LA CASA.jpg";

const Destacado = () => {
    return (
        <div className="text-center">
           <img src={imagen} alt="Promoción Destacada" className="img-fluid" width="300" /> 
        </div>
        
    )
}

export default Destacado;