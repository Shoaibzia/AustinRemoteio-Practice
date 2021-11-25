import React from 'react';
import "./DashboardDesign.scss";
import Logo4 from "../../Assets/svg/4.svg";
import Logo5 from "../../Assets/svg/5.svg";
import Logo6 from "../../Assets/svg/6.svg";
import Logo7 from "../../Assets/svg/7.svg";
import Logo8 from "../../Assets/svg/8.svg";
import Logo9 from "../../Assets/svg/9.svg";
import Logo10 from "../../Assets/svg/10.svg";
import Logo11 from "../../Assets/svg/11.svg";
import Logo12 from "../../Assets/svg/12.svg";
import Logo13 from "../../Assets/svg/13.svg";
import Logo14 from "../../Assets/svg/14.svg";
import Image1 from "../../Assets/PNG/1.png";
import Image2 from "../../Assets/PNG/2.png";

const Index = () => {
    return (
        <>
        <div className="Arlo">
            
            <div className="Container">
                {/* Arlo 1st child */}
            <div className="Arlo-PI">
                <img src={Logo5} alt="This is the Logo5"/>
            </div>

            {/* Arlo 2nd child */}
            <div className="Arlo-Navigation">
                <div className="Monitor">
                    <p>Monitor</p>
                    <p>Control</p>
                    <p>Config</p>
                </div>
                <div className="Drop">
                    <img className="File" src={Logo6} alt="This is the file"/>
                    <img className="Arrow" src={Logo8} alt="This is the drop arrow"/>
                </div>
                <div className="Settings">
                    <img src={Logo7} alt="THis is the image of setting bar"/>
                </div>
            </div>
            </div>
        </div>
        <div className="Main-div-status">
            <div className="Class">
            <div className="Main-div">
{/* Box number1 */}
                <div className="box1">

                    <div className="Status">Status</div>

                    <div className="Pump">
                        <p>Pump</p>
                        <h3>Off</h3>
                    </div>
                    <div className="Pump">
                        <p>Line 1</p>
                        <h3>Idle</h3>
                    </div>
                    <div className="Pump1">
                        <p>Line 2</p>
                        <h3>Idle</h3>
                    </div>

                </div>
{/* Box number 2 */}
                <div className="box2">
                    <h2>Line 01</h2>

                    <div className="sub-box">

                        <div className="Box1">
                            <img src={Logo9} alt="This i the wind image"/>
                            <p>Pressure</p>
                            <div className="measurement">
                                <h3>70</h3>
                                <p>PSI</p>
                                <img src={Logo10} alt="This iis thje direction image"/>
                            </div>
                        </div>
                        <img src={Image1} alt="This is the vertical-line image"/>
                        <div className="Box2">
                            <img src={Logo11} alt="This i the wind image"/>
                            <p>Temperature</p>
                            <div className="measurement">
                                <h3>89</h3>
                                <p>degF</p>
                                <img src={Logo12} alt="This iis thje direction image"/>
                            </div>
                        </div>
                        <img src={Image1} alt="This is the vertical-line image"/>
                        <div className="Box3">
                            <img src={Logo13} alt="This i the wind image"/>
                            <p>Flow rate</p>
                            <div className="measurement">
                                <h3>23</h3>
                                <p>Bbl/day</p>
                                <img src={Logo14} alt="This iis thje direction image"/>
                            </div>
                        </div>
                        
                    </div>

                </div>
{/* Box number 3 */}
                <div className="box3">
                    <h2>Line 01</h2>

                    <div className="sub-box">

                        <div className="Box1">
                            <img src={Logo9} alt="This i the wind image"/>
                            <p>Pressure</p>
                            <div className="measurement">
                                <h3>70</h3>
                                <p>PSI</p>
                                <img src={Logo10} alt="This iis thje direction image"/>
                            </div>
                        </div>
                        <img src={Image1} alt="This is the vertical-line image"/>
                        <div className="Box2">
                            <img src={Logo11} alt="This i the wind image"/>
                            <p>Temperature</p>
                            <div className="measurement">
                                <h3>89</h3>
                                <p>degF</p>
                                <img src={Logo12} alt="This iis thje direction image"/>
                            </div>
                        </div>
                        <img src={Image1} alt="This is the vertical-line image"/>
                        <div className="Box3">
                            <img src={Logo13} alt="This i the wind image"/>
                            <p>Flow rate</p>
                            <div className="measurement">
                                <h3>23</h3>
                                <p>Bbl/day</p>
                                <img src={Logo14} alt="This iis thje direction image"/>
                            </div>
                        </div>
                        
                    </div>

                </div>
{/* Box number 4 */}
                <div className="box4">
                    <h2>Line 01</h2>

                    <div className="sub-box">

                        <div className="Box1">
                            <img src={Logo9} alt="This i the wind image"/>
                            <p>Pressure</p>
                            <div className="measurement">
                                <h3>70</h3>
                                <p>PSI</p>
                                <img src={Logo10} alt="This iis thje direction image"/>
                            </div>
                        </div>
                        <img src={Image1} alt="This is the vertical-line image"/>
                        <div className="Box2">
                            <img src={Logo11} alt="This i the wind image"/>
                            <p>Temperature</p>
                            <div className="measurement">
                                <h3>89</h3>
                                <p>degF</p>
                                <img src={Logo12} alt="This iis thje direction image"/>
                            </div>
                        </div>
                        <img src={Image1} alt="This is the vertical-line image"/>
                        <div className="Box3">
                            <img src={Logo13} alt="This i the wind image"/>
                            <p>Flow rate</p>
                            <div className="measurement">
                                <h3>23</h3>
                                <p>Bbl/day</p>
                                <img src={Logo14} alt="This iis thje direction image"/>
                            </div>
                        </div>
                        
                    </div>

                </div>
{/* Box nember 4 ENDS */}
            </div>
            </div>
            <div className="Graph">
                <img src={Image2} alt="This is the grapgh"/>
            </div>
            </div>
        </>
    )
}

export default Index
