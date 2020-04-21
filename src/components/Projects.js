import React, { Fragment } from 'react'
import Footer from './Footer'
import './stylesheets/Projects.css'

const Projects = () => {
    return (
        <Fragment>
            <div className="projects-container">
                <div className="project" >
                    <div className="project-title">
                        <p>Quiz game</p>
                    </div>
                    <div className="project-links-container">
                        <a className="view-code-link" href="https://github.com/FerdyM/QuizGame" target="_blank" rel="noopener noreferrer">View Code</a>
                        <a className="view-live-link" href="https://romantic-goodall-9a7f7b.netlify.com/" target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                </div>
                <div className="project project2" >
                    <div className="project-title">
                        <p>Web Portfolio</p>
                    </div>
                    <div className="project-links-container">
                        <a className="view-code-link" href="https://github.com/FerdyM/developer_portfolio" target="_blank" rel="noopener noreferrer">View Code</a>
                        <a className="view-live-link" href="https://localhost:3000" target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                </div>
                <div className="project project3" >
                    <div className="project-title">
                        <p>Robot Bartender</p>
                    </div>
                    <div className="project-links-container">
                        <a className="view-code-link" href="https://github.com/FerdyM/RoBar" target="_blank" rel="noopener noreferrer">View Code</a>
                        <a className="view-live-link" href="#" target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                </div>
                <div className="project project4" >
                    <div className="project-title">
                        <p>Custom Smarthome Dashboard</p>
                    </div>
                    <div className="project-links-container">
                        <a className="view-code-link" href="https://github.com/FerdyM/SmartHomeDash" target="_blank" rel="noopener noreferrer">View Code</a>
                        <a className="view-live-link" href="#" target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Projects;