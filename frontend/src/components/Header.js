import React, { useState } from 'react';
import logo from '../assets/logo/Logo.png';


const Header = (props) => {
    const [inactive, SetInactive] = useState(false);

    return <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div onClick={ () => {
                    SetInactive(!inactive);
                }} className="toggle-button">
                    <i class="bi bi-plus-square"></i>
                </div>
            </div>

            <div className="divider">

            </div>
        </div>;
    
};

export default Header;

