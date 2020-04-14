import React from 'react'
import './stylesheets/Projects.css'

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="project1" >
                <div className="project-title">
                    <p>Quiz game</p>
                </div>
                <div className="project-links-container">
                    <a className="view-code-link" href="https://github.com/FerdyM/QuizGame" target="_blank">View Code</a>
                    <a className="view-live-link" href="https://romantic-goodall-9a7f7b.netlify.com/" target="_blank">View Live</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;