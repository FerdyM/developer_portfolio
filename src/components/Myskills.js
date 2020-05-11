import React from 'react';
import javascriptIcon from '../images/code-icons/javascript.png'
import htmlIcon from '../images/code-icons/html.png'
import cssIcon from '../images/code-icons/css-3.png'
import pythonIcon from '../images/code-icons/python.png'
import typescriptIcon from '../images/code-icons/typescript.png'
import rubyIcon from '../images/code-icons/ruby.png'
import cppIcon from '../images/code-icons/c++.png'
import './stylesheets/Myskills.css'
import bulmaIcon from '../images/code-icons/bulma.png'
import reactIcon from '../images/code-icons/react.png'
import angularIcon from '../images/code-icons/angular.png'
import nodejsIcon from '../images/code-icons/nodeJS.png'
import expressIcon from '../images/code-icons/expressJS.png'
import materialIcon from '../images/code-icons/materialui.png'
import railsIcon from '../images/code-icons/rails.png'
import mongodbIcon from '../images/code-icons/mongodb.png'
import postgresIcon from '../images/code-icons/postgres.png'
import awsIcon from '../images/code-icons/aws.png'
import awsiotIcon from '../images/code-icons/awsiot.png'
import dockerIcon from '../images/code-icons/docker.png'
import gitlabIcon from '../images/code-icons/gitlab.png'
import githubBlack from '../images/code-icons/github-black.png'

const Myskills = () => {
    return (
        <div className="skills-container">
            <h2 className="title">My skills</h2>
            <div className="line" />
                <div className="row1">
                    <div className="icon-container">     
                        <img src={htmlIcon} className="skill-icon" alt="html-icon" />
                        <p>HTML</p>
                    </div>
                    <div className="icon-container">     
                        <img src={cssIcon} className="skill-icon" alt="css-icon" />
                        <p>CSS/SASS</p>
                    </div>
                    <div className="icon-container">     
                        <img src={javascriptIcon} className="skill-icon" alt="javascript-icon" />
                        <p>Javascript</p>
                    </div>
                    <div className="icon-container">     
                        <img src={typescriptIcon} className="skill-icon" alt="typescript-icon" />
                        <p>Typescript</p>
                    </div>
                </div>
                <div className="row2">
                    <div className="icon-container">
                        <img src={pythonIcon} className="skill-icon" alt="python-icon" />
                        <p>Python</p>
                    </div>
                    <div className="icon-container">
                        <img src={cppIcon} className="skill-icon" alt="c++ icon" />
                        <p>C++</p>
                    </div>
                    <div className="icon-container">
                        <img src={rubyIcon} className="skill-icon" alt="ruby-icon" />
                        <p>Ruby</p>
                    </div>
                </div>
                <div className="row3">
                    <div className="icon-container">
                        <img src={reactIcon} className="skill-icon" alt="react icon" />
                        <p>React</p>
                    </div>
                    <div className="icon-container">
                        <img src={angularIcon} className="skill-icon" alt="angular icon" />
                        <p>Angular</p>
                    </div>
                    <div className="icon-container">
                        <img src={nodejsIcon} className="node-icon" alt="nodejs icon" />
                        <p>NodeJS</p>
                    </div>
                    <div className="icon-container">
                        <img src={expressIcon} className="express-icon" alt="express icon" />
                        <p>Express</p>
                    </div>
                </div>
                <div className="row4">
                    <div className="icon-container">
                        <img src={railsIcon} className="skill-icon" alt="rails icon" />
                        <p>Ruby on Rails</p>
                    </div>
                    <div className="icon-container">
                        <img src={materialIcon} className="skill-icon" alt="material ui icon" />
                        <p>Material-UI</p>
                    </div>
                </div>
                <div className="row5" >
                    <div className="icon-container"> 
                        <img src={mongodbIcon} className="skill-icon" alt="mongodb icon" />
                        <p>MongoDB</p>
                    </div>
                    <div className="icon-container"> 
                        <img src={postgresIcon} className="skill-icon" alt="postgresql icon" />
                        <p>Postgresql</p>
                    </div>
                </div>

                <div className="row6">
                    <div className="icon-container">
                        <img src={awsIcon} className="aws-icon" alt="aws icon" />
                        <p>AWS</p>
                    </div>
                    <div className="icon-container">
                        <img src={awsiotIcon} className="skill-icon" alt="aws iot icon" />
                        <p>AWS IOT/Greengrass</p>
                    </div>
                    <div className="icon-container">
                        <img src={dockerIcon} className="skill-icon" alt="docker icon" />
                        <p>Docker</p>
                    </div>
                </div>
                <div className="row7">
                    <div className="icon-container">
                        <img src={githubBlack} className="skill-icon" alt="github icon" />
                        <p>Github</p>
                    </div>
                    <div className="icon-container">
                        <img src={gitlabIcon} className="skill-icon" alt="gitlab icon" />
                        <p>Gitlab CI/CD</p>
                    </div>
                </div>
        </div>
    )
}

export default Myskills;