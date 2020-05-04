import React, { Fragment } from 'react';
import Intro from '../Intro';
import Projects from '../Projects'
import downArrow from '../../images/down.png'
import { Link } from 'react-scroll'
import './stylesheet/LandingPage.css'

const Main = () => {
    return (
        <Fragment className="all">
            <div className="main">
                <div className="main-container">
                    <h2>Not Just A Creative Software Developer</h2>
                    <h3>Lets Turn Problems Into Solutions</h3>
                </div>
                {/* <a href="#intro-anchor" className="down-arrow-div"> */}
                <Link 
                    to="intro-anchor"
                    className="down-arrow-div"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                >
                    <img className="down-arrow" src={downArrow} alt="profile of me"/>
                </Link>
                {/* </a> */}
            </div>
            <Intro />
            <Projects />
        </Fragment>
    )
}

export default Main;