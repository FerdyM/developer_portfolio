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
                    <img src={reactIcon} className="skill-icon" alt="" />
                    <img src={angularIcon} className="skill-icon" alt="" />
                    <img src={nodejsIcon} className="node-icon" alt="" />
                    <img src={expressIcon} className="express-icon" alt="" />
                </div>
                <div className="row4">
                <img src={railsIcon} className="skill-icon" alt="" />
                <img src={materialIcon} className="skill-icon" alt="" />
                <img src={bulmaIcon} className="bulma-icon" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Myskills;