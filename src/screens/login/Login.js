import React,{Component} from 'react';
// import {Route, Switch} from "react-router-dom"
// import Home from "./screens/home/home";
// import Profile from "./screens/profile/Profile";
import Header from "../../common/header/Header"
// import Card from '@material-ui/core/Card';
// import { Button } from '@material-ui/core';
// Constant stores crendtials and token
const userDetails = {
    username: 'bart',
    password: 'bart',
    accessToken: 'IGQVJXdW03dllYb1h0TURVTHFrWC1nTG5UcVpsX3ZAJTTJvN1A4TWZA2THFjVVpxNmtqTlY0RldNRUJQaU1NbnNLeVNVV1htaDJSSnFURkZAORFlKOHpXdGVzbW1VU2M0ck5hTXJ4bmg4V0xiWk5FSlQwSXpQVHhXbk1vRThr'
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
    }
    render(){
        return(
            <div>
                <div><Header/></div>
                <div className='login-card-flex-container'>This is the Login Page</div>
                {/* <Button variant="contained">Default</Button> */}
            </div>
        )
          } 
}
export default Login;