import { FaAward, FaUsers, FaTasks } from "react-icons/fa";


export default function Info () {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <FaAward className="about__icon"/>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">x Years of Work Experience</span>
            </div>
            <div className="about__box">
                <FaTasks className="about__icon"/>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">X+ Projects</span>
            </div>
            <div className="about__box">
                <FaUsers className="about__icon"/>
                <h3 className="about__title">Clients</h3>
                <span className="about__subtitle"></span>
            </div>
        </div>
    )
}