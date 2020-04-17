import React from 'react'
import axios from 'axios';
import Footer from './Footer'
import './stylesheets/Contact.css'
import GithubLogo from '../images/code-icons/github-black.png'
import TwitterLogo from '../images/code-icons/twitter-black.png'
import LinkedinLogo from '../images/code-icons/linkedin-black.png'

const Contact = () => {
    return (
        <div className="contact-body">
            <div className="location-container">

            </div>
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
                <div className="title-container">
                    <p className="title">    
                        Contact Me
                    </p>
                </div>
                <h2>Contact Information</h2>
                <p>Email: ferdymacleod21@gmail.com</p>
                <div className="links-container">
                    <img src={GithubLogo} alt="github logo"/>
                    <img src={TwitterLogo} alt="twitter logo"/>
                    <img src={LinkedinLogo} alt="linkedin logo"/>
                </div>
                <p>Or</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" value={this.state.email} onChange={this.onFieldChange} />
                    </div>
                    <div>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" value={this.state.subject} onChange={this.onFieldChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <input type="text" name="message" value={this.state.message} onChange={this.onFieldChange} />
                    </div>
                    <input className="submit-button" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Contact;
