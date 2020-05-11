import React from 'react'
import './stylesheet/Contact.css'
import { TextField, Button, CircularProgress } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

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
            loading: false,
            sumbitSuccess: false,
            submitError: false
        }
        this.onChange = this.onChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFailedSubmit = this.handleFailedSubmit.bind(this)
        this.handleSuccessfulSubmit = this.handleSuccessfulSubmit.bind(this)
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
        fetch('https://limitless-cove-69990.herokuapp.com/api/contact/', requestOptions)
            .then(response => {
                this.setState({
                    loading: false,
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    emailError: false,
                    subjectError: false,
                    messageError: false,
                    sumbitSuccess: true
                })
                this.handleSuccessfulSubmit()
            })
            .catch(err => {
                console.log(`Error: ${err}`)
                this.setState({
                    loading: false,
                    submitError: true
                })
                this.handleFailedSubmit()
            })

    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    onEmailChange(event) {
        this.onChange(event) 
        setTimeout(() => {
            if (this.state.email === '') {
                this.setState({
                    emailError: false
                })
            } else if (!this.state.email.includes('@') || !this.state.email.includes('.com')) {
                this.setState({
                    emailError: true
                })
            } else if (this.state.email.length < 6) {
                this.setState({
                    emailError: true
                })
            } else {
                this.setState({
                    emailError: false
                })
            }
        }, 10);
    }

    onSubjectChange(event) {
        this.onChange(event) 
        setTimeout(() => {
            if (this.state.subject === '') {
                this.setState({
                    subjectError: false
                })
            } else if (this.state.subject.length < 6) {
                this.setState({
                    subjectError: true
                })
            } else {
                this.setState({
                    subjectError: false
                })
            }
        }, 10);
    }

    onMessageChange(event) {
        this.onChange(event)
        setTimeout(() => {
            if (this.state.message === '') {
                this.setState({
                    messageError: false
                })
            } else if (this.state.message.length < 6) {
                this.setState({
                    messageError: true
                })
            } else {
                this.setState({
                    messageError: false
                })
            }
        }, 10);  
    }

    handleSuccessfulSubmit() {
        setTimeout(() => {
            this.setState({
                sumbitSuccess: false
            })
        }, 3000);
    }
    
    handleFailedSubmit() {
        setTimeout(() => {
            this.setState({
                submitError: false
            })
        }, 3000);
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
                        <TextField className="input1" name="name" value={this.state.name} id="outlined-basic" label="Name" variant="outlined" onChange={this.onChange} />
                        {this.state.emailError ? (
                            <TextField error helperText="Must be a valid email" className="input2" name="email" value={this.state.email} id="outlined-basic" label="Email" variant="outlined" onChange={this.onEmailChange} />
                        ) : (
                            <TextField className="input2" name="email" value={this.state.email} id="outlined-basic" label="Email" variant="outlined" onChange={this.onEmailChange} />
                        )}
                        {this.state.subjectError ? (
                            <TextField error helperText="Subject must be atleast 6 characters" className="input3" name="subject" value={this.state.subject} id="outlined-basic" label="Subject" variant="outlined" onChange={this.onSubjectChange} />
                        ) : (
                            <TextField className="input3" name="subject" value={this.state.subject} id="outlined-basic" label="Subject" variant="outlined" onChange={this.onSubjectChange} />
                        )}
                        {this.state.messageError ? (
                            <TextField error helperText="Message must be atleast 6 characters" className="input4" name="message" value={this.state.message} id="outlined-basic" label="Message" multiline variant="outlined" onChange={this.onMessageChange} />
                        ) : (
                            <TextField className="input4" name="message" value={this.state.message} id="outlined-basic" label="Message" multiline variant="outlined" onChange={this.onMessageChange} />
                        )}
                        <Button className="button" type="submit" variant="contained" color="primary">Submit</Button>
                    </form>
                    {this.state.sumbitSuccess ? (
                        <Alert severity="success">Message sumbitted successfully!</Alert>
                    ) : (
                        <></>
                    )}
                    {this.state.submitError ? (
                        <Alert severity="error">Message failed to submit!</Alert>
                    ) : (
                        <></>
                    )}
                </div>
        )
    }
}


export default Contact;
