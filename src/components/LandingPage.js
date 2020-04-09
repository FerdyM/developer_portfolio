import React, { Fragment } from 'react';
import './stylesheets/LandingPage.css';
import Intro from './Intro';
import Footer from './Footer'
import downArrow from '../images/down.png'

const Main = () => {
    return (
        <Fragment>
            <div className="main">
                <h2>Not Just A Creative Software Developer</h2>
                <h3>Lets Turn Problems Into Solutions</h3>
                <img className="down-arrow" src={downArrow} alt="profile of me"/>
            </div>
            <Intro />
            <Footer />
        </Fragment>
    )
}

export default Main;