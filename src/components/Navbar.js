import React, { Component } from 'react';
import './stylesheets/Navbar.css';
import menu from '../images/menu.png'
import githubLogo from '../images/white-github-logo.png'
import linkedInLogo from '../images/white-linkedin-logo.png'
import twitterLogo from '../images/white-twitter-logo.png'
import {Link} from "react-router-dom"

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuActive: true,
            navClass: "navbar",
            navTitle: "navbar-title",
            menuItemOne: 'selected',
            menuItemTwo: 'not-selected',
            menuItemThree: 'not-selected',
            menuItemFour: 'not-selected',
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
            <div className={this.state.navClass} >
                <div className="navbar-top">
                    <h2 className="navbar-title">Ferdy Macleod</h2>
                    <img className="menu-icon" src={menu} alt="menu icon" onClick={this.triggerMenu} />
                </div>
                <ul className="cont">
                    <Link to="/">
                        <li 
                            className={this.state.menuItemOne} 
                            onClick={() => this.setState({  menuItemOne: 'selected', menuItemTwo: 'not-selected', menuItemThree: 'not-selected', menuItemFour: 'not-selected'})}
                        >
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li 
                            className={this.state.menuItemTwo}
                            onClick={() => this.setState({  menuItemOne: 'not-selected', menuItemTwo: 'selected', menuItemThree: 'not-selected', menuItemFour: 'not-selected'})}
                        >
                            About
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li 
                            className={this.state.menuItemThree}
                            onClick={() => this.setState({  menuItemOne: 'not-selected', menuItemTwo: 'not-selected', menuItemThree: 'selected', menuItemFour: 'not-selected'})}
                        >
                            Contact
                        </li>
                    </Link>
                        <li 
                            className={this.state.menuItemFour}
                            onClick={() => this.setState({  menuItemOne: 'not-selected', menuItemTwo: 'not-selected', menuItemThree: 'not-selected', menuItemFour: 'selected'})}
                        >
                            Resume
                        </li>
                </ul>
                <span className="line"></span>
                <div className="social-media-link-container">
                    <a href="https://github.com/FerdyM" target="_blank" rel="noopener noreferrer">
                        <img className="github-logo" src={githubLogo} alt="link to my github" />
                    </a>
                    <a href="https://www.linkedin.com/in/ferdymacleod/" target="_blank" rel="noopener noreferrer">
                        <img className="linkedin-logo" src={linkedInLogo} alt="link to my linkedin" />
                    </a>
                    <a href="https://twitter.com/ferdymacleod1" target="_blank" rel="noopener noreferrer">
                        <img className="twitter-logo" src={twitterLogo} alt="link to my twitter" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;