import React,{Component} from 'react';
// import {Route, Switch} from "react-router-dom"
// import Home from "./screens/home/home";
// import Profile from "./screens/profile/Profile";
import Header from "../../common/header/Header"
// import Box from '@material-ui/core/Box';
import { 
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Typography } from '@material-ui/core';

import './Login.css'

// Constant stores crendtials and token
const userDetails = {
    username: 'bart',
    password: 'bart',
    accessToken: 'IGQVJXLWcxX0ZAaRldTZAzRZAUlRaQWd2WWJBck40WHdKZAnRwZAUZAqY2F4X2ZAnVWhrTXF2d0JkeWdEa1A3NFY0YmpkMEVWdjVXb0E4ZAmtIbzJFQ0l3aGJrc0RKYVJOS0JqeGZAFRUxDanoxQ0NWakRmSUJOb2xtSUZAvdEt5RjVj'
};


class Login extends Component{
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            usernameHelperTextDisplay: 'display-none',
            passwordHelperTextDisplay: 'display-none',
            incorrectCredentialHelperTextDisplay: 'display-none',
            loginSuccess: false            
        }
        window.sessionStorage.setItem("UT",userDetails.accessToken);
    }
    render(){
        return(
            <div>
                <div><Header/></div>
                <div className='login-card-flex-container'>
                <Card className='login-card'>
                <CardContent>
                <FormControl className='login-form-control'>
                            <Typography variant="h5">
                                <div fontWeight='fontWeightBold'>
                                    LOGIN
                                </div>
                            </Typography>
                        </FormControl>
                        <br/>
                        <br/>
                            <FormControl required className='login-form-control'>
                                <InputLabel htmlFor='username'>Username</InputLabel>
                                <Input id='username' name='username' type='text' onChange={this.onUsernameFieldChange}/>
                                <FormHelperText className={this.state.usernameHelperTextDisplay}><span
                                    className='form-helper-text-red-color'>required</span></FormHelperText>
                            </FormControl>
                        <br/>
                        <br/>
                            <FormControl required className='login-form-control'>
                                <InputLabel htmlFor='password'>Password</InputLabel>
                                <Input id='password' name='password' type='password'
                                       onChange={this.onPasswordFieldChange}/>
                                <FormHelperText className={this.state.passwordHelperTextDisplay}><span
                                    className='form-helper-text-red-color'>required</span></FormHelperText>
                            </FormControl>
                        <br/>
                        <br/>
                        <FormHelperText className={this.state.incorrectCredentialHelperTextDisplay}><span
                                className='form-helper-text-red-color'>Incorrect username and/or password</span></FormHelperText>
                        <br/>
                            <FormControl>
                                <Button variant='contained' color='primary' onClick={this.onLogin}>Login</Button>
                           </FormControl>
                </CardContent>
                </Card>
                
            </div>
            </div>
        )
          } 
}
export default Login;