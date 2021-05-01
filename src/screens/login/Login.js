import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

import Header from '../../common/header/Header';
import './Login.css'

const styles = {
    card: {
        padding: '15px',
        position: 'relative',
        top: '90px',
        left: '50%',
        width: '325px',
        transform: 'translateX(-50%)',
    },
    title: {
        fontSize: 20
    }
};

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            usernameRequired: "dispNone",
            password: "",
            passwordRequired: "dispNone",
            incorrectUsernamePassword: "dispNone",
            loggedIn: sessionStorage.getItem('access-token') == null ? false : true
        };
    }

    loginClickHandler = () => {
        this.setState({ incorrectUsernamePassword: "dispNone" });
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });

        if (this.state.username === "" || this.state.password === "") { return }

        if (this.state.username === "bart" && this.state.password === "bart") {
            sessionStorage.setItem('username','admin');
            sessionStorage.setItem('access-token', 'IGQVJXVmI0dE43eDFFaUY1eWdLR3JfSnZAMckpsUHRidmtNRGtDVTBDZAXIzc3BJNFZAoWVpMb3dyN2djYnR6MjJXd2JLVndObzlOSHBPTk5FRVdrS2wwVUFDc3QycGNzbFN1MGJvZAkFwVmw2bU9DZAWo0LXdVRl9kUzBMOTFN');
            this.setState({ loggedIn: true });
            this.navigateToHome();
        } else {
            this.setState({ incorrectUsernamePassword: "dispBlock" });
        }
    }

    navigateToHome = () =>{
      this.props.history.push('/home');
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value })
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <div className="main-container">
                <Header
                  screen={"Login"}/>
                <Card style={styles.card}>
                    <CardContent>
                        <Typography style={styles.title}> LOGIN </Typography><br />
                        <FormControl required style={{width: '100%'}}>
                            <InputLabel htmlFor="username"> Username </InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                            <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl required style={{width: '100%'}}>
                            <InputLabel htmlFor="password"> Password </InputLabel>
                            <Input id="password" type="password" onChange={this.inputPasswordChangeHandler} />
                            <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <div className={this.state.incorrectUsernamePassword}><span className="red"> Incorrect username and/or password </span></div><br />
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}> LOGIN </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Login;



// import React, { Component } from 'react';
// // import {Route, Switch} from "react-router-dom"
// // import Home from "./screens/home/home";
// // import Profile from "./screens/profile/Profile";
// import Header from "../../common/header/Header"
// // import Box from '@material-ui/core/Box';
// import {
//     Button,
//     Card,
//     CardContent,
//     FormControl,
//     FormHelperText,
//     Input,
//     InputLabel,
//     Typography
// } from '@material-ui/core';

// import './Login.css'

// // Constant stores crendtials and token
// const userDetails = {
//     username: 'bart',
//     password: 'bart',
//     accessToken: 'IGQVJXLWcxX0ZAaRldTZAzRZAUlRaQWd2WWJBck40WHdKZAnRwZAUZAqY2F4X2ZAnVWhrTXF2d0JkeWdEa1A3NFY0YmpkMEVWdjVXb0E4ZAmtIbzJFQ0l3aGJrc0RKYVJOS0JqeGZAFRUxDanoxQ0NWakRmSUJOb2xtSUZAvdEt5RjVj'
// };








// class Login extends Component {
//     constructor() {
//         super();
//         this.state = {
//             username: '',
//             password: '',
//             usernameHelperTextDisplay: 'display-none',
//             passwordHelperTextDisplay: 'display-none',
//             incorrectCredentialHelperTextDisplay: 'display-none',
//             loginSuccess: false
//         }
//         window.sessionStorage.setItem("UT", userDetails.accessToken);
//     }
//     render() {




//         return (
//             <div>
//                 <div><Header /></div>
//                 <div className='login-card-flex-container'>
//                     <Card className='login-card'>
//                         <CardContent>
//                             <FormControl className='login-form-control'>
//                                 <Typography variant="h5">
//                                     <div fontWeight='fontWeightBold'>
//                                         LOGIN
//                                 </div>
//                                 </Typography>
//                             </FormControl>
//                             <br />
//                             <br />
//                             <FormControl required className='login-form-control'>
//                                 <InputLabel htmlFor='username'>Username</InputLabel>
//                                 <Input id='username' name='username' type='text' onChange={this.onUsernameFieldChange} />
//                                 <FormHelperText className={this.state.usernameHelperTextDisplay}><span
//                                     className='form-helper-text-red-color'>required</span></FormHelperText>
//                             </FormControl>
//                             <br />
//                             <br />
//                             <FormControl required className='login-form-control'>
//                                 <InputLabel htmlFor='password'>Password</InputLabel>
//                                 <Input id='password' name='password' type='password'
//                                     onChange={this.onPasswordFieldChange} />
//                                 <FormHelperText className={this.state.passwordHelperTextDisplay}><span
//                                     className='form-helper-text-red-color'>required</span></FormHelperText>
//                             </FormControl>
//                             <br />
//                             <br />
//                             <FormHelperText className={this.state.incorrectCredentialHelperTextDisplay}><span
//                                 className='form-helper-text-red-color'>Incorrect username and/or password</span></FormHelperText>
//                             <br />
//                             <FormControl>
//                                 <Button variant='contained' color='primary' onClick={this.onLogin}>Login</Button>
//                             </FormControl>
//                         </CardContent>
//                     </Card>

//                 </div>
//             </div>
//         )
//     }

//     onUsernameFieldChange = (e) => {
//         if (e.target.value === '') {
//             this.setState({
//                 username: e.target.value,
//                 usernameHelperTextDisplay: 'display-block',
//                 incorrectCredentialHelperTextDisplay: 'display-none'
//             });
//         } else {
//             this.setState({username: e.target.value, usernameHelperTextDisplay: 'display-none'})
//         }
//     }
//     onPasswordFieldChange = (e) => {
//         if (e.target.value === '') {
//             this.setState({
//                 password: e.target.value,
//                 passwordHelperTextDisplay: 'display-block',
//                 incorrectCredentialHelperTextDisplay: 'display-none'
//             });
//         } else {
//             this.setState({password: e.target.value, passwordHelperTextDisplay: 'display-none'})
//         }
//     }
//     onLogin = () => {
//         if (this.state.username === '') {
//             this.setState({usernameHelperTextDisplay: 'display-block'});
//         }
//         if (this.state.password === '') {
//             this.setState({passwordHelperTextDisplay: 'display-block'});
//         }

//         if (this.state.incorrectCredentialHelperTextDisplay === 'display-block') {
//             this.setState({incorrectCredentialHelperTextDisplay: 'display-none'});
//         }

//         if (this.state.username !== '' && this.state.password !== '') {
//             if (this.state.username === userDetails.username && this.state.password === userDetails.password) {
//                 this.setState({incorrectCredentialHelperTextDisplay: 'display-none', loginSuccess: true});
//                 sessionStorage.setItem("access-token", userDetails.accessToken);
//             } else {
//                 this.setState({incorrectCredentialHelperTextDisplay: 'display-block'});
//             }
//         }
//     }
// }
// export default Login;