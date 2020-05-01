import React from 'react'
import './stylesheet/Contact.css'
import { TextField, Button, CircularProgress } from '@material-ui/core'

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
            message: '',
            loading: false
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
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
        this.setState({
            loading: true
        })
        fetch('https://salty-brushlands-62535.herokuapp.com/api/contact', requestOptions)
            .then(response => {
                this.setState({
                    loading: false,
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            })
            .catch(err => console.log(err))

    }

    onNameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    onEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }

    onSubjectChange(event) {
        this.setState({
            subject: event.target.value
        })
    }

    onMessageChange(event) {
        this.setState({
            message: event.target.value
        })
    }

    render() {

        return (
                <div className="form-container">
        
                    <h2>Contact Me</h2>
                    <div className="text-div">
                        <p>Email: ferdymacleod21@gmail.com</p>
                        <p>Location: Brisbane, Australia</p>
                    </div>
                    {this.state.loading ? (<CircularProgress className="loading" />) : (<></>)}
                    <form onSubmit={this.handleSubmit}>
                        <TextField className="input1" value={this.state.name} id="outlined-basic" label="Name" variant="outlined" onChange={this.onNameChange} />
                        <TextField className="input2" value={this.state.email} id="outlined-basic" label="Email" variant="outlined" onChange={this.onEmailChange} />
                        <TextField className="input3" value={this.state.subject} id="outlined-basic" label="Subject" variant="outlined" onChange={this.onSubjectChange} />
                        <TextField className="input4" value={this.state.message} id="outlined-basic" label="Message" multiline variant="outlined" onChange={this.onMessageChange} />
                        <Button className="button" type="submit" variant="contained" color="primary">Submit</Button>
                    </form>
                </div>
        )
    }
}


export default Contact;
