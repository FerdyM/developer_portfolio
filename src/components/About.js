import React from 'react';
import Myskills from './Myskills'

const About = () => {
    return (
        <div className="about-container">
 {/*            <img src={expamleProfilePic} /> */}
            <h2>Ferdy Macleod</h2>
            <p>
                I’m a quick thinking, simple-solution finding, high energy developer with a huge passion for 
                the web and IOT.
            </p>
            <p>
                I have experience building full stack web applications, IOT applications and AWS deployment; 
                but thats not all I can do!
            </p>
            <Myskills />
        </div>
    )
}

export default About;