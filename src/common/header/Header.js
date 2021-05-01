import React, {Component, Fragment} from 'react';
import './Header.css';
import {Redirect} from 'react-router';
import ReactDOM from 'react-router-dom';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
// import SearchIcon from '@material-ui/icons/Search'; - This import is breaking the header
// import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';


class Header extends Component {

    constructor() {
        super();
        this.state = {
            menuState: false,
            anchorEl: null,
            loggedOut: false
        }
    }

    render() {
        if (this.state.loggedOut === true) {
            return <Redirect to='/'/>
        }
        return <div className='header-flex-container'>
            {
                this.props.isLoggedIn !== true ?
                    <div>
                            <header className='logo'>Image Viewer</header>
                    </div>
                    :
                    <Fragment>
                        <div onClick={() => this.onLogoClick()}>
                                <header className='logo'>Image Viewer</header>
                        </div>
                        <div className='header-right-flex-container'>
                            {
                                this.props.showSearchBox ?
                                    <Input className='search-box' type='search' placeholder='Search...' disableUnderline
                                           startAdornment={
                                               <InputAdornment position="start">BLA</InputAdornment>
                                           } onChange={this.props.onSearch}/>
                                    :
                                    null
                            }
                            {/* <IconButton id='profile-icon' onClick={this.onProfileIconClick}>
                                <Avatar variant="circle" alt="profile_picture"
                                        src={this.props.profilePictureUrl}/>
                            </IconButton> */}
                            <div>
                                {/* <Menu open={this.state.menuState} onClose={this.onMenuClose}
                                      anchorEl={this.state.anchorEl} getContentAnchorEl={null}
                                      anchorOrigin={{vertical: "bottom", horizontal: "right"}} keepMounted>
                                    {
                                        this.props.showMyAccount ?
                                            <MenuItem onClick={this.onMyAccount}> */}
                                                <div>My
                                                Account</div>
                                                {/* </MenuItem> : null */}
                                    {/* } */}
                                    {/* {
                                        this.props.showMyAccount ?
                                            <Divider variant="middle"/> : null
                                    } */}
                                    {/* <MenuItem onClick={this.onLogout}> */}
                                        <div>Logout</div>
                                        {/* </MenuItem> */}
                                {/* </Menu> */}
                            </div>
                        </div>
                    </Fragment>
            }
        </div>
    }

    onLogoClick = () => {
        this.props.history.push({
                pathname: '/home',
                state:
                    {
                        loginSuccess: true
                    }
            }
        )
        ;
    }

    onMyAccount = () => {
        this.props.history.push({
            pathname: '/profile',
            state:
                {
                    loginSuccess: true
                }
        });
    }

    onLogout = () => {
        sessionStorage.removeItem('access-token');
        this.setState({loggedOut: true})
    }

    onProfileIconClick = (e) => {
        this.setState({'menuState': !this.state.menuState, 'anchorEl': e.currentTarget});
    }

    onMenuClose = () => {
        this.setState({'menuState': !this.state.menuState, 'anchorEl': null});
    }
}

export default Header;