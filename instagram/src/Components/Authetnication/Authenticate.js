import React, { Component } from 'react';
import PropTypes from 'prop-types';

// currying
// https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339



function Authenticate (App, LogIn){  
    return class extends React.Component {
    // leverage conditional rendering 
    // https://reactjs.org/docs/conditional-rendering.html
    constructor() {
        super();

        this.state = {
            loggedIn: false
        }
    }

    // great place to check local storage!
    componentDidMount() {
        if (localStorage.getItem("username") && localStorage.getItem("password")) {
            this.setState({loggedIn: true})
        }
    }

    render() {
        console.log("Time to render");
        if (this.state.loggedIn) {
            console.log("Render app!");
            return <App/>
        }
        else {
            console.log("Render log in page!");
            return <LogIn/>
        }
    }
}
}


// function Authenticate(App) {
//     console.log(App);
//   return class extends React.Component {
//     render() {
//       return (
//           <App />
//       );
//     }
//   };
// }

export default Authenticate;