import React from 'react'
import githubLogo from '../images/white-github-logo.png'
import linkedInLogo from '../images/white-linkedin-logo.png'
import twitterLogo from '../images/white-twitter-logo.png'
import './stylesheets/Footer.css'

const Footer = () => {
    return (
        <div className="footer-container" >
            <div className="resume-container">
                <a href="#" className="resume-link" >
                    Resume
                </a>
            </div>
            <div className="icon-container">
                <a href="https://github.com/FerdyM" target="_blank">
                    <img src={githubLogo} className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/ferdymacleod/" target="_blank">
                    <img src={linkedInLogo} className="icon" />
                </a>
                <a href="https://twitter.com/ferdymacleod1" target="_blank">
                    <img src={twitterLogo} className="icon" />
                </a>
            </div>
        </div>
    )
}

export default Footer;