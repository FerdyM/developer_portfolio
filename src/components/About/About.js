import React, { Fragment } from 'react';
import Myskills from '../Myskills'
import Footer from '../Footer/Footer'
import './stylesheet/About.css'

const About = () => {
    return (
        <Fragment>
            <div className="about-container">
                <div className="profile-container">
                    {/* <img src={placeholder} alt="placeholder" /> */}
                </div>
                <div className="about-main-container">
                    <h2>Ferdy Macleod</h2>
                    <p className="text1"> 
                        I’m a quick thinking, simple-solution finding, high energy developer with a huge passion for 
                        the web and IOT.
                    </p>
                    <p className="text2">
                        I have experience building full stack web applications, IOT applications and AWS deployment
                        but thats not all I can do!
                    </p>
                </div>
            </div>
            <Myskills />
            <Footer />
        </Fragment>
    )
}

export default About;