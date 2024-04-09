import './skills.css'

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
                                <i className="fab fa-html5"></i>
                                <span>HTML5</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>CSS3</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Javascript</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>jQuery</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Responsive Design</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Tailwind</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Bootstrap</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Progressive Web Applications (PWAs)</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Local Storage / Session Storage / IndexedDB</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>React.js</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills__card">
                        <h5 className="skills__card__title">Databases</h5>
                        <ul className="skills__list">
                            <li className="skills__item">
                                <i className=""></i>
                                <span>MySQL</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>MongoDB</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills__card">
                        <h5 className="skills__card__title">Server Side Development</h5>
                        <ul className="skills__list">
                            <li className="skills__item">
                                <i className=""></i>
                                <span>User Authentication</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Template Engines</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>MERN Stack</span>
                                <span>(MongoDB, Express.js, React.js, Node.js)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills__card">
                        <h5 className="skills__card__title">API Design</h5>
                        <ul className="skills__list">
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Client-Server Model</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>API</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>REST</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>JSON</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>AJAX (Fetch API)</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>HTTP request methods</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>GraphQL</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills__card">
                        <h5 className="skills__card__title">Deployment and Delivery</h5>
                        <ul className="skills__list">
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Heroku</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Git</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Github Pages</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Shell Scripting</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Unit Testing</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
                                <span>Linting</span>
                            </li>
                            <li className="skills__item">
                                <i className=""></i>
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