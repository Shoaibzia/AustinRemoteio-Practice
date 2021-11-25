import React from 'react';
import "./Header.scss";
import Logo1 from "../../Assets/svg/1.svg";
import Logo2 from "../../Assets/svg/2.svg";
import Logo3 from "../../Assets/svg/3.svg";
import Logo4 from "../../Assets/svg/4.svg";

const Index = () => {
    return (
        <div className="Navbar">
            
            {/* Navbar child 1 */}
            <div className="Austin-Brand"> 
                <img src={Logo1} alt="This is the Austin Logo"/>
            </div>

            {/* Navbar child 2 */}
            <div className="Nav-Profile">

                <div className="Profile-Bell">
                    <img src={Logo2} alt="This is the profile Brand bell"/>
                </div>

                <div className="Profile-image">
                    <img src={Logo3} alt="This is the profile Brand Image"/>
                </div>

                <div className="Profile-Gretchen">
                    <p className="Gretchen">Gretchen</p>
                    <p className="Super-Admin">Super Admin</p>
                </div>

                <div className="Profile-arrow">
                    <img src={Logo4} alt="This is the profile Brand Arrow"/>
                </div>

            </div>

        </div>
    )
}

export default Index
