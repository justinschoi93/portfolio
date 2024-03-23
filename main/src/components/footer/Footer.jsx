import React from "react";
import "./footer.css";
import {AiOutlineFacebook, AiOutlineInstagram} from "react-icons/ai";
import {TfiTwitter} from "react-icons/tfi";
import {FiGithub, FiLinkedin} from "react-icons/fi";
// import Signature from "../../assets/Signature-White.png";

function Footer (){
    return(
        <footer id="footer">
            <a href="#" className="footer__logo"><img src="" alt="signature"/></a>

            <ul className="permalinks">
                <li><a href="#"></a>Home</li>
                <li><a href="#about">About</a></li>
                <li><a href="#experiences">Experiences</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://wwww.facebook.com/justinschoi93" target="_blank"><AiOutlineFacebook/></a>
                <a href="https://www.instagram.com/justinschoi93" target="_blank"><AiOutlineInstagram/></a>
                <a href="https://www.twitter.com/justinschoi93" target="_blank"><TfiTwitter/></a>
                <span className="mobile__socials">
                    <a href="https://www.github.com/justinschoi93" target="_blank"><FiGithub/></a>
                    <a href="https://www.linkedin.com/in/justinschoi93" target="_blank"><FiLinkedin/></a>
                </span>
            </div>
        </footer>
    )

}

export default Footer;