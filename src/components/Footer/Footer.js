import React from 'react'
import githubLogo from '../../images/white-github-logo.png'
import linkedInLogo from '../../images/white-linkedin-logo.png'
import twitterLogo from '../../images/white-twitter-logo.png'
import './stylesheet/Footer.css'
import Resume from '../../images/resume/FerdysResume.pdf'

const Footer = () => {
    return (
        <div className="footer-container" >
            <div className="resume-container">
                <a onClick={() => {window.open(Resume)}} className="resume-link" >
                    Resume
                </a>
            </div>
            <div className="icon-container">
                <a href="https://github.com/FerdyM" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} className="icon" alt="github icon" />
                </a>
                <a href="https://www.linkedin.com/in/ferdymacleod/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedInLogo} className="icon" alt="linkedin icon"/>
                </a>
                <a href="https://twitter.com/ferdymacleod1" target="_blank" rel="noopener noreferrer">
                    <img src={twitterLogo} className="icon" alt="twitter icon" />
                </a>
            </div>
        </div>
    )
}

export default Footer;