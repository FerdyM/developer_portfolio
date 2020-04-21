import React, { Fragment } from 'react';
import Myskills from './Myskills'
import Footer from './Footer'
import placeholder from '../images/placeholder.png'
import './stylesheets/About.css'

const About = () => {
    return (
        <Fragment>
            <div className="about-container">
                <div className="profile-container">
                    <img src={placeholder} alt="placeholder" />
                </div>
                <h2>Ferdy Macleod</h2>
                <p>
                    I’m a quick thinking, simple-solution finding, high energy developer with a huge passion for 
                    the web and IOT.
                </p>
                <p>
                    I have experience building full stack web applications, IOT applications and AWS deployment; 
                    but thats not all I can do!
                </p>
            </div>
            <Myskills />
            <Footer />
        </Fragment>
    )
}

export default About;