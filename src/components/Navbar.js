import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
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
            navTitle: "navbar-title-white",
            menuItemOne: 'selected',
            menuItemTwo: 'not-selected',
            menuItemThree: 'not-selected',
            menuItemFour: 'not-selected',
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
        
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll(event) {
        console.log(window.scrollY)
        if (window.location.pathname == '/about') {
            if (window.scrollY > 280 && window.scrollY < 770 ) {
                this.setState({
                    navTitle: 'navbar-title-white',
                })
            } else {
                this.setState({
                    navTitle: 'navbar-title',
                })
            }
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

    handleContactPage = () => {
        this.setState({
            navTitle: 'navbar-title',
        })
    }

    handleContactPageMenu = () => {
        this.setState({
            navTitle: 'navbar-title-white',
        })
    }

    render() {
        if (window.location.pathname === '/contact' && this.state.navTitle === 'navbar-title-white' && this.state.menuActive ) {
            this.handleContactPage()
        } 

        if (window.location.pathname === '/contact' && this.state.menuActive  === false && this.state.navTitle === 'navbar-title') {
            this.handleContactPageMenu()
        } 

        return (
            <div className={this.state.navClass} >
                <div className="navbar-top" id="scrollspy" >
                    <h2 className={this.state.navTitle}>Ferdy Macleod</h2>
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