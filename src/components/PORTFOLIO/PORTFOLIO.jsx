import {useState, useEffect } from 'react';
import projectsData from './projectsData';
import { FaGithub } from 'react-icons/fa';
import { SiCreatereactapp } from 'react-icons/si';
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
                <div className="header__subtitle">Recent Projects</div>
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
                        <div className="project__header">
                            <h4 className="project__title">{project.title}</h4>
                            <h5 className="project__subtitle">{project.subtitle}</h5>
                        </div>
                        <div className="project__img">
                            <img src={project.src} alt="project.src" />                        
                        </div>
                        <div className="project__app">
                            <a href={project.app} className="project__app-link" target="_blank">
                                <i className="project__app-icon">
                                    <SiCreatereactapp/>
                                </i>
                            </a>
                        </div>
                        <div className="project__github">
                            <a href={project.github} className="project__github-link"  target="_blank">
                                <i className="github-pages-icon">
                                    <FaGithub/>
                                </i>    
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PORTFOLIO;
