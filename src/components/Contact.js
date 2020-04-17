import React from 'react'
import Footer from './Footer'
import './stylesheets/Contact.css'
import GithubLogo from '../images/code-icons/github-black.png'
import TwitterLogo from '../images/code-icons/twitter-black.png'
import LinkedinLogo from '../images/code-icons/linkedin-black.png'
import {Link} from "react-router-dom"

const Contact = () => {
    return (
        <div>
            <ContactForm />
            <Footer />
        </div>
    )
}

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message
            })
        };
        fetch('/api/contact', requestOptions)
            .then(response => console.log(response))
            .catch(err => console.log(err))

    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="form-container">
    
                <h2>Contact Information</h2>
                <p className="text">Email: ferdymacleod21@gmail.com</p>
                <p className="text">Location: Brisbane, Australia</p>
                <div className="links-container">
                    <Link to="https://github.com/FerdyM" target="_blank">
                        <img src={GithubLogo} alt="github logo"/>
                    </Link>
                    <Link to="https://twitter.com/ferdymacleod1" target="_blank">
                        <img src={TwitterLogo} alt="twitter logo"/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/ferdymacleod/" target="_blank">
                        <img src={LinkedinLogo} alt="linkedin logo"/>
                    </Link>
                </div>
                <p className="or">Or</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} placeholder="name"/>
                    </div>
                    <div>
                        {/* <label htmlFor="email">Email</label> */}
                        <input type="text" name="email" value={this.state.email} onChange={this.onFieldChange} placeholder="email"/>
                    </div>
                    <div>
                        {/* <label htmlFor="subject">Subject</label> */}
                        <input type="text" name="subject" value={this.state.subject} onChange={this.onFieldChange} placeholder="subject"/>
                    </div>
                    <div>
                        {/* <label htmlFor="message">Message</label> */}
                        <input type="text" name="message" value={this.state.message} onChange={this.onFieldChange} placeholder="message"/>
                    </div>
                    <input className="submit-button" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Contact;
