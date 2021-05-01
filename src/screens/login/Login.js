import React,{Component} from 'react';
// import {Route, Switch} from "react-router-dom"
// import Home from "./screens/home/home";
// import Profile from "./screens/profile/Profile";
import Header from "../../common/header/Header"
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
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
                <div className='login-card-flex-container'>This is the Login Page
                </div>
                <Card className='login-card'>This is a card</Card>
                <Button variant="contained">Default</Button>    
            </div>
        )
          } 
}
export default Login;