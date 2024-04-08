import './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer__container">
                    <h1 className="footer__title">Choi</h1>
                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">About</a>
                        </li>
                        <li>
                            <a href="#projects" className="footer__link">Projects</a>
                        </li>
                        <li>
                            <a href="#testimonials" className="footer__link">Testimonials</a>
                        </li>
                    </ul>
                    <div className="footer__socials">
                        <a href="https://github.com/justinschoi93" className="footer__social-link" target="_blank">
                            <FaGithub/>
                        </a>
                        <a href="https://linkedin.com/in/justinschoi93" className="footer__social-link" target="_blank">
                            <FaLinkedin/>
                        </a>
                        {/* <a href="https://justin.com" className="footer__social-link" target="_blank">
                            <i className="bx bxl-"></i>
                        </a> */}
                    </div>
                    <span className="footer__copy">© jCodes. All rigths reserved</span>
                </div>
            </footer>
        </>
    )
}

export default Footer;