import './skills.css'

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills__container">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">My &quottool&quot", if you will...</span>
                <div className="skills__contenct">
                    <div className="skills__card">
                        <h5 className="skills__card__title"></h5>
                        <ul className="skills__list">
                            <li className="skills__item">
                                <i className="fab fa-html5"></i>
                                <span>HTML5</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;