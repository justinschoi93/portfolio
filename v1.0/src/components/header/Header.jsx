import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

function Header () {
    return (
        <>
            <header id = "header">
                <div className = "container header__container">
                    <h5>Hello I'm</h5>
                    <h1>Justin Choi</h1>
                    <h5 className = "text-light">Full-Stack Developer</h5>
                    <CTA/>
                    <div className="photo-card">
                        <div className="photo">
                            {/* <img src={Me} alt="image of Justin Choi"></img> */}
                        </div>
                    </div>
                    <HeaderSocials/>
                    <a href="#footer" className="scroll__down">
                        Scroll Down
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header;