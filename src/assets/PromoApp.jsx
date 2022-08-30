import React from "react";
import "./PromoApp.css";
import appstore from "./images/app__store.png";
import googleplay from "./images/google_play.png";
import celular from "./images/landing_page_image-croped-5-1-1.png";

const PromoApp = () => {
    return (
        <div className="row fondo_rojo">
            <div className="col-md-4 offset-md-2 pt-5 text-center">
                <img src={celular} alt="Celular" width="480" />
            </div>
            <div className="col-md-4 p-5 text-white">
                <h3>Descargá la APP y disfrutá mucho más por mucho menos</h3>
                <p><img src={googleplay} alt="Google Play" width="135" /> <img src={appstore} alt="App Store" width="135" /></p>
                <p>Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. Y otros países. App Store es una marca de servicio de Apple Inc. Google Play es una marca comercial de Google Inc. Se aplican términos.</p>
            </div>
        </div>
    )
}

export default PromoApp;