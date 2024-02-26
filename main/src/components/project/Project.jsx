import React from "react";
import "./project.css";

const data = [
    {
      id: 1,
      image: cover1,
      title: "",
      github: "",
      demo: "",
    },
    {
      id: 2,
      image: cover2,
      title: "",
      github: "",
      demo: "",
    }
  ];
function Project () {

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                { data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target="_blank">
                                    GitHub
                                </a>
                                <a href={demo} className="btn" target="_blank">
                                    Live Site
                                </a>
                            </div>
                        </article>
                    );
                })};
            </div>
        </section>
    )

}

export default Project;