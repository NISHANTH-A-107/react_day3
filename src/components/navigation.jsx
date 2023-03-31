import './navigation.css';
import React from "react";
import logo from './logoprfl.jpg';

function Nav(){
    return(
        <nav className="navmenu">
            <a className="anc" href="">
                Coffee
                <br />
                <img src={logo} alt="" />
            </a>
            <a className="anc" href="">
                Tea
                <br />
                <img src={logo} alt="" />
            </a>
            <a className="anc" href="">
                Pasteries
                <br />
                <img src={logo} alt="" />
            </a>
        </nav>
    )
}

export default Nav;