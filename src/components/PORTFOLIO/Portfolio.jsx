import {useState, useEffect } from 'react';
import projectsData from './projectsData';
import './portfolio.css';

const PORTFOLIO = () => {
    
    const [active, setActive] = useState('All');
    const [projects, setProjects] = useState([]);
    
    const tabHandler = (e) => {
        e.preventDefault();
        setActive(`${e.target.textContent}`);
    }

    useEffect(()=>{
        console.log(active);
        if (active==='All') {
            setProjects(projectsData);

        } else {
            setProjects(projectsData.filter( project=> project.type === active))
        }

        
    }, [active])


    return (
        <section className="portfolio__container">
            <div className="portfolio__header">
                <h2 className="header__title">PORTFOLIO</h2>
                <div className="header__subtitle">Things I've made</div>
            </div>
            <nav className="portfolio__navbar">
                <ul className="portfolio__navbar-list">
                    <li className={`nav-item ${ active  === 'All' ? 'active' : ''}`} onClick={tabHandler}>All</li>
                    <li className={`nav-item ${ active === 'Full-Stack' ? 'active' : ''}`} onClick={tabHandler}>Full-Stack</li>
                    <li className={`nav-item ${ active === 'Front-End' ? 'active' : ''}`} onClick={tabHandler}>Front-End</li>
                    <li className={`nav-item ${ active === 'Back-End' ? 'active' : ''}`} onClick={tabHandler}>Back-End</li>
                </ul>
            </nav>
            <div className="projects__container">
                {projects.map((project, index)=>(
                    <div className="project__card" key={index}>
                        {project.name}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PORTFOLIO;
