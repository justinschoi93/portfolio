import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function HeaderSocials () {
    return (
        <>
            <div className = "header__socials">
                <a href = "https://github.com/justinschoi93" target = "_blank">
                    <BsGithub />
                </a>
                <a href="https://linkedin.com/in/justinschoi93" target="_blank">
                    <BsLinkedin/>
                </a>
            </div>
        </>
    )
}

export default HeaderSocials;