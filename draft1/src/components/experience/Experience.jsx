import React from "react";
import "./experience.css";
import { BsCheck2Circle } from "react-icons/bs";

function Experience () {
    return (
        <section id="experience">
            <h5>Experience</h5>
            <h2>Acquired Skills</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front-end Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon"/>
                            <div>
                                <h4>HTML5 (Semantic)</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Back-end Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon"/>
                            <div>
                                <h4>Node.js</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Experience;