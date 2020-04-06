import React from 'react'
import downarrow from '../images/down.png'
import codeLogo from '../images/coding.png'
import lightbulb from '../images/lightbulb.png'
import book from '../images/book.png'
import './Intro.css'

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro-points">
                <img className="intro-icon1" src={codeLogo} alt="code-tag icon"/>
                <p className="intro-text1">High Quality Code</p>
                <img className="intro-icon2" src={lightbulb} alt="lightbulb icon"/>
                <p className="intro-text2">Creative Problem Solving</p>
                <img className="intro-icon3" src={book} alt="book icon"/>
                <p className="intro-text3">Always Learning</p>
            </div>
            <div className="intro-para-container"> 
                <p className="intro-para">
                    I’m Ferdy, a software developer from Brisbane Australia. I graduated from CoderAcademy 
                    Brisbane in 2020 and recently completed an internship as a software developer.
                </p>
                <p className="intro-para">
                    I pride myself on constantly learning and trying to find the simplest solution to the problem!
                </p>
                <p className="intro-para"> 
                    Below you’ll find some examples of my proudest work. Feel free to look around.
                </p>
            </div>
            <div className="intro-down-container">
                <img src={downarrow} alt="link to next page" className="intro-down"/>
            </div>
        </div>
    )
}

export default Intro;