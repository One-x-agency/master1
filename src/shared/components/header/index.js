import React from "react";
import "./header.scss";
import Headerlogo from "../../../assests/logos/black-logo (1).png";
import whitelogo from "../../../assests/logos/white-new.png";
export default function Header(){
    return(
        <div className="header-color">
            <div className="container">
                <header>
                    <div className="header-logo">
                        <img src={Headerlogo} className="black-logo"></img>
                        <img src={whitelogo} className="white-logo"></img>
                    </div>
                    <div className="header-items">
                        <a>Company</a>
                        <a>Product</a>
                        <a>Solution</a>
                        <a>partner</a>
                        <a>Contact</a>
                    </div>
                    <div className="header-btn">
                        <button>
                            Enquiry
                            <div className="header-btn-animation"></div>
                            <div className="header-btn-animation-two">Enquiry</div>
                        </button>
                        
                    </div>
                </header>
            </div>
        </div>
    )
}