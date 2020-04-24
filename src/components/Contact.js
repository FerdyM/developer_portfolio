import React from 'react'
import './stylesheets/Contact.css'
import GithubLogo from '../images/code-icons/github-black.png'
import TwitterLogo from '../images/code-icons/twitter-black.png'
import LinkedinLogo from '../images/code-icons/linkedin-black.png'
import {Link} from "react-router-dom"

const Contact = () => {
    return (
        <div>
            <ContactForm />
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
                <div className="text-div">
                    <p>Email: ferdymacleod21@gmail.com</p>
                    <p>Location: Brisbane, Australia</p>
                </div>

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
                        <input className="inputField" type="text" name="name" value={this.state.name} onChange={this.onFieldChange} placeholder="Name"/>
                        <input className="inputField" type="text" name="email" value={this.state.email} onChange={this.onFieldChange} placeholder="Email"/>
                        <input className="inputField" type="text" name="subject" value={this.state.subject} onChange={this.onFieldChange} placeholder="Subject"/>
                        <textarea className="messageField" type="text" name="message" value={this.state.message} onChange={this.onFieldChange} placeholder="Message"/>
                    <input className="submit-button" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Contact;
