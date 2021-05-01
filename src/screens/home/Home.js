import React, { Component } from 'react';
// import {Route, Switch} from "react-router-dom"
// import Home from "./screens/home/home";
// import Profile from "./screens/profile/Profile";
import Header from "../../common/header/Header"
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';

class Home extends React.Component {
    constructor() {
        super();
        //   this.state = {
        //     error: null,
        //     isLoaded: false,
        //     items: []
        //   };
    }

    componentDidMount() {
        var accesstoken = window.sessionStorage.getItem("UT");
        var url = "https://graph.instagram.com/me/media?fields=id,caption&access_token=" + accesstoken;
        var url2 = url;
        // fetch(url)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             //   debugger;
        //             for (var i = 0; i < result.data.length; i++) {
        //                 var mediaid = result.data[i].id;
        //                 fetch(url2 + mediaid + accesstoken)
        //                     .then(res2 => res2.json())
        //                     .then(result2 => {
        //                         //   debugger;
        //                         //   result2.media_url;
        //                     }, error2 => { });

        //             }
        //             // this.setState({
        //             //   isLoaded: true,
        //             //   items: result.items
        //             // });
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             //   debugger;
        //             // this.setState({
        //             //   isLoaded: true,
        //             //   error
        //             // });
        //         }
        //     )
    }

    render() {
        //   const { error, isLoaded, items } = this.state;
        //   if (error) {
        //     return <div>Error: {error.message}</div>;
        //   } else if (!isLoaded) {
        //     return <div>Loading...</div>;
        //   } else {
        //     return (
        //       <ul>
        //         {items.map(item => (
        //           <li key={item.id}>
        //             {item.name} {item.price}
        //           </li>
        //         ))}
        //       </ul>
        //     );
        //   }
        return (
            <div>
                <div><Header /></div>
            </div>
        )
    }
}
export default Home;