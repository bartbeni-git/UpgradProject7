import React, { Component } from 'react';
import './Login.css';
import Header from "../../common/header/Header";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
//importing all required components

//This is the Login part. It will render the Login page with input fields, login button etc.
//username, password, access token hard-coded here
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            usernameRequired: 'dispNone',
            passwordRequired: 'dispNone',
            credentials: {
                username: 'bart',
                password: 'bart'
            },
            accessToken: 'IGQVJWN0pTRVhxNms1dERVd0VUeTZABdlVrMmRSWGtIZAUZAwQlVHRHYyTm1OYVNDNlNGTE1lcFAzUi1iNnZAlVGZAFeGhZAdXliZAE9tTWsxaUktTUhJQ01rUXpRcXRfUUhINXBxRVFuYmdnQkhlcDlscDZAFVUNGYVVxQll5TlVr',
            incorrectCredential: 'dispNone',
        };
    }

//Functions to handle username/password fields, and login    
    inputUsernameChangeHandler = (event) => {
        this.setState({ username: event.target.value })
    }

    
    inputPasswordChangeHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    
    loginHandler = () => {
        this.state.username === '' ? this.setState({ usernameRequired: 'dispBlock' })
            : this.setState({ usernameRequired: 'dispNone' });
        this.state.password === '' ? this.setState({ passwordRequired: 'dispBlock' })
            : this.setState({ passwordRequired: 'dispNone' });
        if (this.state.username === "" || this.state.password === "") {
            this.setState({
                incorrectCredential: 'dispNone'
            });
            return;
        }

        if (this.state.username === this.state.credentials.username
            && this.state.password === this.state.credentials.password) {
            this.setState({
                incorrectCredential: 'dispNone'
            });
            sessionStorage.setItem('access-token', this.state.accessToken);
            this.props.history.push("/home");
        } else {
            this.setState({
                incorrectCredential: 'dispBlock'
            });
        }
    }
//Rendering the page with header
    render() {
        return (
            <div>                
                <Header />                
                <div className="login-card-container">
                    <Card className="login-card">
                        <CardContent>
                            <FormControl className='login-form-control'>
                                <Typography variant="h5">
                                    LOGIN
                                </Typography>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required className='login-form-control'>
                                <InputLabel htmlFor='username'>Username</InputLabel>
                                <Input id='username' type='text' onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}>
                                    <span className='credential-required'>required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required className='login-form-control'>
                                <InputLabel htmlFor='password'>Password</InputLabel>
                                <Input id='password' type='password' onChange={this.inputPasswordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className='credential-required'>required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormHelperText className={this.state.incorrectCredential}>
                                <span className='credential-required'>Incorrect username and/or password</span>
                            </FormHelperText>
                            <br />
                            <Button variant='contained' color='primary' onClick={this.loginHandler}>
                                LOGIN
                            </Button>
                        </CardContent>
                    </Card>
                </div>                
            </div>
        )
    }
}

export default Login;