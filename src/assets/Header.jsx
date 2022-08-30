import React from "react";
import logo from "./images/SMASHED BABIES LOGO 1.png";

const Header = () => {
    return (
        <div className="container color_header">
            <ul className="nav d-flex align-items-center">
                <li className="nav-item">
                    <a className="link_header" aria-current="page" href="# "><img src={logo} width="100" alt="Smashed Babies" /></a>
                </li>
                <li className="nav-item">
                    <a className="link_header" href="# ">Pedí tu Smashed Burger</a>
                </li>
                <li className="nav-item">
                    <a className="link_header" href="# ">Menú</a>
                </li>
                <li className="nav-item">
                    <a className="link_header" href="# ">Cupones</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;