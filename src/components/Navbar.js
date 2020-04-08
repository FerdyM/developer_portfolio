import React, { Component } from 'react';
import './stylesheets/Navbar.css';
import menu from '../images/menu.png'
import githubLogo from '../images/white-github-logo.png'
import linkedInLogo from '../images/white-linkedin-logo.png'
import twitterLogo from '../images/white-twitter-logo.png'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuActive: true,
            navClass: "navbar"
        }
    }

    triggerMenu = () => {
        this.setState({menuActive: !this.state.menuActive});
        if (this.state.menuActive) {
            this.setState({navClass: "navbar-active"})
        } else {
            this.setState({navClass: "navbar"})
        }
    }

    render() {
        return (
            <div className={this.state.navClass}>
                <div className="navbar-top">
                    <h2 className="navbar-title">Ferdy Macleod</h2>
                    <img className="menu-icon" src={menu} alt="menu icon" onClick={this.triggerMenu} />
                </div>
                <ul className="cont">
                    <li className="first">Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li className="last">Resume</li>
                </ul>
                <span className="line"></span>
                <div className="social-media-link-container">
                    <img className="github-logo" src={githubLogo} alt="link to my github" />
                    <img className="linkedin-logo" src={linkedInLogo} alt="link to my linkedin" />
                    <img className="twitter-logo" src={twitterLogo} alt="link to my twitter" />
                </div>
            </div>
        )
    }
}

export default Navbar;