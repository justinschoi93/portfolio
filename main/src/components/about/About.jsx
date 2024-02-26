import React from "react";
import "./about.css";
import { FaAward, FaUsers, FaTasks } from "react-icons/fa";

function About () {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={""} alt="Creator in About Section" />
                    </div>
                </div>
           

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <icon className="about__icon">
                                <FaAward/>
                            </icon>
                            <h5>Experience</h5>
                            <small>X Years Working</small>
                        </article>
                        <article className="about__card">
                            <icon className="about__icon">
                                <FaUsers/>
                            </icon>
                            <h5>Clients</h5>
                            <small>X+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <icon className="about__icon">
                                <FaTasks/>
                            </icon>
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

export default About;