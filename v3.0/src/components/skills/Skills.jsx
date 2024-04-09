import './skills.css'
import { MdHttp,
    MdOutlineHttps
                 } from 'react-icons/md';
import { FaHtml5,
    FaCss3,
    FaJs,
    FaRegCheckCircle,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaMixcloud
                    } from 'react-icons/fa';
import { BiLogoHeroku,
    BiInfinite
                    } from 'react-icons/bi';
import { DiJqueryLogo } from 'react-icons/di';
import {SiTailwindcss,
    SiMysql,
    SiMongodb,
    SiAuth0,
    SiShell,
    SiEslint
                    } from 'react-icons/si';
import { GrStorage,
    GrGraphQl
                    } from 'react-icons/gr';
import { VscJson } from 'react-icons/vsc';
const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="skills__container">
                <h2 className="section__title">Skills</h2>
                <p className="section__subtitle">{'My "toolbox," if you will...'}</p>
                <div className="skills__content">
                    <div className="skills__card">
                        <h5 className="skills__card__title">Browser Based Technologies</h5>
                        <ul className="skills__list">
                            <li className="skills__item">
                                <FaHtml5 className="skills__icon"/>
                                <span>HTML5</span>
                            </li>
                            <li className="skills__item">
                                <FaCss3 className="skills__icon"/>
                                <span>CSS3</span>
                            </li>
                            <li className="skills__item">
                                <FaJs className="skills__icon"/>
                                <span>Javascript</span>
                            </li>
                            <li className="skills__item">
                                <DiJqueryLogo className="skills__icon"/>                          <span>jQuery</span>
                            </li>
                            <li className="skills__item">
                                <FaRegCheckCircle className="skills__icon"/>
                                <span>Responsive Design</span>
                            </li>
                            <li className="skills__item">
                                <SiTailwindcss className="skills__icon"/>
                                <span>Tailwind</span>
                            </li>
                            <li className="skills__item">
                                <FaBootstrap className="skills__icon"/>
                                <span>Bootstrap</span>
                            </li>
                            <li className="skills__item">
                                <FaRegCheckCircle className="skills__icon"/>
                                <span>Progressive Web Applications (PWAs)</span>
                            </li>
                            <li className="skills__item">
                                <GrStorage className="skills__icon"/>
                                <span>Local Storage / Session Storage / IndexedDB</span>
                            </li>
                            <li className="skills__item">
                                <FaReact className="skills__icon"/>
                                <span>React.js</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills__card">
                        <h5 className="skills__card__title">Databases</h5>
                        <ul className="skills__list">
                            <li className="skills__item">
                                <SiMysql className="skills__icon"/>
                                <span>MySQL</span>
                            </li>
                            <li className="skills__item">
                                <SiMongodb className="skills__icon"/>
                                <span>MongoDB</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills__card">
                        <h5 className="skills__card__title">Server Side Development</h5>
                        <ul className="skills__list">
                            <li className="skills__item">
                                <SiAuth0 className="skills__icon"/>
                                <span>User Authentication</span>
                            </li>
                            <li className="skills__item">
                                <FaRegCheckCircle className="skills__icon"/>
                                <span>Template Engines</span>
                            </li>
                            <li className="skills__item">
                                <FaNodeJs className="skills__icon"/>                                <span>MERN Stack</span>
                                <span>(MongoDB, Express.js, React.js, Node.js)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills__card">
                        <h5 className="skills__card__title">API Design</h5>
                        <ul className="skills__list">
                            <li className="skills__item">
                                <FaRegCheckCircle className="skills__icon"/>
                                <span>Client-Server Model</span>
                            </li>
                            <li className="skills__item">
                                <FaMixcloud className="skills__icon"/>
                                <span>API</span>
                            </li>
                            <li className="skills__item">
                                <MdOutlineHttps className="skills__icon"/>
                                <span>REST</span>
                            </li>
                            <li className="skills__item">
                                <VscJson className="skills__icon"/>
                                <span>JSON</span>
                            </li>
                            <li className="skills__item">
                                <FaRegCheckCircle className="skills__icon"/>
                                <span>AJAX (Fetch API)</span>
                            </li>
                            <li className="skills__item">
                                <MdHttp className="skills__icon"/>
                                <span>HTTP request methods</span>
                            </li>
                            <li className="skills__item">
                                <GrGraphQl className="skills__icon"/>
                                <span>GraphQL</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills__card">
                        <h5 className="skills__card__title">Deployment and Delivery</h5>
                        <ul className="skills__list">
                            <li className="skills__item">
                                <BiLogoHeroku className="skills__icon"/>
                                <span>Heroku</span>
                            </li>
                            <li className="skills__item">
                                <FaGithub className="skills__icon"/>
                                <span>Git</span>
                            </li>
                            <li className="skills__item">
                                <FaGithub className="skills__icon"/>
                                <span>Github Pages</span>
                            </li>
                            <li className="skills__item">
                                <SiShell className="skills__icon"/>
                                <span>Shell Scripting</span>
                            </li>
                            <li className="skills__item">
                                <FaRegCheckCircle className="skills__icon"/>
                                <span>Unit Testing</span>
                            </li>
                            <li className="skills__item">
                                <SiEslint className="skills__icon"/>
                                <span>Linting</span>
                            </li>
                            <li className="skills__item">
                                <BiInfinite className="skills__icon"/>
                                <span>Continuous Integration</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;