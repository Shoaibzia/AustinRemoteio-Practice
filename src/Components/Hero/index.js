import React from 'react';
import Logo4 from "../../Assets/svg/4.svg";
import "./Hero.scss";

const Index = () => {
    return (
        <div className="Hero">
            
            {/* Hero 1st child */}
            <div className="Hero-ID">
                
                <div className="Device">
                    <p>Device ID</p>
                </div>
                <div className="Arlo-PI">
                    <p>Arlo P1</p>
                    <img src={Logo4} alt="This is the arrow image"/>
                </div>
            </div>

            {/* Hero 2nd child */}
            <div className="Hero-Day">
                <div className="Date">
                    <p>Date</p>
                </div>
                <div className="Time">
                    <p>12:41 PM, 19 June 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Index
