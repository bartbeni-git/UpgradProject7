import React, {Component} from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import { Link } from 'react-router-dom';

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  search: {
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: '#c0c0c0',
    marginLeft: 0,
    width: '300px',
  },
  searchIcon: {
    width: theme.spacing.unit * 4,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#000000'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 4,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  },
  avatar: {
    width: 50,
    height: 50,
  },
  appHeader:{
    backgroundColor:'#263238'
  },
  hr:{
    height:'1.5px',
    backgroundColor:'#f2f2f2',
    marginLeft:'5px',
    marginRight:'5px'
  }
})

class Header extends Component{

  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  render(){
    const {classes,screen} = this.props;
    return (<div>
        <AppBar className={classes.appHeader}>
          <Toolbar>
            {(screen === "Login" || screen === "Home") && <span className="header-logo">Image Viewer</span>}
            {(screen === "Profile") && <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"><span className="header-logo">Image Viewer</span></Link>}
            <div className={classes.grow}/>
            {(screen === "Home") &&
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase onChange={(e)=>{this.props.searchHandler(e.target.value)}} placeholder="Search…" classes={{
                    input: classes.inputInput
                  }}/>
              </div>
            }
            {(screen === "Home" || screen === "Profile")  &&
              <div>
                <IconButton onClick={this.handleClick}>
                  <Avatar alt="Remy Sharp" src="https://scontent-maa2-1.cdninstagram.com/v/t51.29350-15/177009929_790902331542980_4352646094238819004_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=Jy_W-1OosrcAX-izzED&_nc_oc=AQnyOd55_9pTmMZhV1Te4OidExvWeR3XKEzXrn8pDiRn9_6CQ95cpBru3-PNkUdjJej4B49COY-JGgQhW2u-QIzM&_nc_ht=scontent-maa2-1.cdninstagram.com&oh=1c91cd560373a501127396d92ff252ab&oe=60B35C60" className={classes.avatar} style={{border: "1px solid #fff"}}/>
                </IconButton>
                <Popover
                  id="simple-menu"
                  anchorEl={this.state.anchorEl}
                  open={Boolean(this.state.anchorEl)}
                  onClose={this.handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}>
                    <div style={{padding:'5px'}}>
                      { (screen === "Home") &&
                        <div>
                          <MenuItem onClick={this.handleAccount}>My Account</MenuItem>
                          <div className={classes.hr}/>
                        </div>
                      }
                      <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                    </div>
                </Popover>
              </div>
            }
          </Toolbar>
        </AppBar>
    </div>)
  }

  handleClick = (event) =>{
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleAccount = ()=>{
    this.props.handleAccount();
    this.handleClose();
  }

  handleLogout = ()=>{
    this.props.handleLogout();
    this.handleClose();
  }

  handleClose = () =>{
    this.setState({ anchorEl: null });
  }
}

export default withStyles(styles)(Header)
