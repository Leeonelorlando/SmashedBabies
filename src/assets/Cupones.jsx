import React from "react";
import cupon1 from "./images/HISTORIA CHEESE BABY.jpg";
import cupon2 from "./images/HISTORIA ONION BABY.jpg";
import cupon3 from "./images/HISTORIA MUSH BABY.jpg";

const Cupones = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={cupon1} alt="Cupon1" className="img-fluid rounded" width="250" />
                </div>
                <div className="col-md-4">
                    <img src={cupon2} alt="Cupon2" className="img-fluid rounded" width="250" />
                </div>
                <div className="col-md-4">
                    <img src={cupon3} alt="Cupon3" className="img-fluid rounded" width="250" />
                </div>
            </div>
        </div>
    )
}

export default Cupones;