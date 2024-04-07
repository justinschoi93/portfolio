// ==================== imports ====================
import "./about.css";
import Info from './Info'
import jPinguino777 from "../../assets/jpinguino777.jpg";
// import CV from "../../assets/CV.pdf";
// import { FaAward, FaUsers, FaTasks } from "react-icons";




// ==================== exports ====================

export default function AboutMe () {
    return (
        <>
            <section className="about section" id="about">
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">My Introduction</span>
                <div className="about__container container grid">
                    <img src={jPinguino777} alt="pfp" className="about__img" />
                    <div className="about__data">
                        <Info/>
                        <p className="about__description">
                            I am a Full Stack Developer the thoroughly enjoys working with a team, and also independetly, to create web applications. 
                            I personally enjoy working on projects that challenge me to take into consideration not ony immediate design and function,
                            but also long term scalability and maintability as well. I would prefer not buy a plant that won't grow, or a plant that would be near impossible to take care of. 
                            Nor would I want to adopt a pet with the same qualitites, for obivous reasons. And as far fetched as this analogy may seem, I really don't see doing business as any different. 
                            Why waste time and resources on something that won't last, or that we won't be able to refactor and resuse again in the future?
                        </p>

                        {/* <a href={CV} className="button button--flex">
                            Download CV
                            <svg className="button__icon">
                            
                            </svg>
                        </a> */}
                    </div>
                </div>
            </section>
        </>
    )
}