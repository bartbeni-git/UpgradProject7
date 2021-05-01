import React,{Component,Fragment} from 'react';
import {Router, Route, Switch} from "react-router-dom"
import Login from "./screens/login/Login";
// import Home from "./screens/home/Home";
import Profile from "./screens/profile/Profile";

class App extends Component{
    render(){
        return(
            <div>
               <Login />
            </div>
        );
    }
    // }

    
    //     return <Router>
    //     <Switch>
    //         <Route exact path='/' render={<Login/>}/>
    //         {/* <Route exact path='/home' render={(props) => <Home {...props}/>}/> */}
    //         {/* <Route exact path='/profile' render={(props) => <Profile {...props}/>}/> */}
    //     </Switch>
    // </Router>
        
    }

export default App;
// export default App;
// const App = () => (
//     <Switch>
//       <Route exact path='/' render={({history}, props) => <Login {...props} history={history}/>} />
//       {/* <Route exact path='/home' render={({history}, props) => <Home {...props} history={history}/>} /> */}
//       {/* <Route exact path='/profile' render={({history}, props) => <Profile {...props} history={history}/>}/> */}
//     </Switch>