// ==================== imports ====================
import React from "react";
import "./about.css";




// ==================== exports ====================

export default function About () {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={jPinguino777} alt="Creator in About Section" />
                    </div>
                </div>
           

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <svg className="about__icon">
                                <FaAward/>
                            </svg>
                            <h5>Experience</h5>
                            <small>X Years Working</small>
                        </article>
                        <article className="about__card">
                            <div className="about__icon">
                                <FaUsers/>
                            </div>
                            <h5>Clients</h5>
                            <small>X+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <div className="about__icon">
                                <FaTasks/>
                            </div>
                            <h5>Projects</h5>
                            <small>X+ Completed</small>
                        </article>
                    </div>

                    <p>
                        <br/>
                    </p>

                    <a href="#contact" className="btn btn-primary about__btn">
                        Connect
                    </a>
                </div>
            </div>
        </section>
    )
}