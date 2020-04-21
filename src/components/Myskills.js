import React from 'react';
import javascriptIcon from '../images/code-icons/javascript.png'
import htmlIcon from '../images/code-icons/html.png'
import cssIcon from '../images/code-icons/css-3.png'
import javaIcon from '../images/code-icons/java.png'
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
            <div className="languages">
                <p>Languages</p>
                <div className="row1">
                    <img src={htmlIcon} className="skill-icon" alt="html-icon" />
                    <img src={cssIcon} className="skill-icon" alt="css-icon" />
                    <img src={javascriptIcon} className="skill-icon" alt="javascript-icon" />
                    <img src={typescriptIcon} className="skill-icon" alt="typescript-icon" />
                </div>
                <div className="row2">
                    <img src={pythonIcon} className="skill-icon" alt="python-icon" />
                    <img src={cppIcon} className="skill-icon" alt="c++ icon" />
                    <img src={rubyIcon} className="skill-icon" alt="ruby-icon" />
                    <img src={javaIcon} className="skill-icon" alt="java-icon" />
                </div>
            </div>
            <div className="frameworks">
                <p>Frameworks</p>
                <div className="row3">
                    <img src={reactIcon} className="skill-icon" alt="react icon" />
                    <img src={angularIcon} className="skill-icon" alt="angular icon" />
                    <img src={nodejsIcon} className="node-icon" alt="nodejs icon" />
                    <img src={expressIcon} className="express-icon" alt="express icon" />
                </div>
                <div className="row4">
                <img src={railsIcon} className="skill-icon" alt="rails icon" />
                <img src={materialIcon} className="skill-icon" alt="material ui icon" />
                <img src={bulmaIcon} className="bulma-icon" alt="bulma icon" />
                </div>
            </div>
            <div className="databases">
                <p>Databases</p>
                <div className="row5" >
                    <img src={mongodbIcon} className="skill-icon" alt="mongodb icon" />
                    <img src={postgresIcon} className="skill-icon" alt="postgresql icon" />
                </div>
            </div>
            <div className="deployment">
                <p>Deployment</p>
                <div className="row6">
                    <img src={awsIcon} className="aws-icon" alt="aws icon" />
                    <img src={awsiotIcon} className="skill-icon" alt="aws iot icon" />
                    <img src={dockerIcon} className="skill-icon" alt="docker icon" />
                </div>
                <div className="row7">
                    <img src={githubBlack} className="skill-icon" alt="github icon" />
                    <img src={gitlabIcon} className="skill-icon" alt="gitlab icon" />
                </div>
            </div>
        </div>
    )
}

export default Myskills;