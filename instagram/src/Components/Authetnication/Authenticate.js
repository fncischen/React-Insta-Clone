import React, { Component } from 'react';
import PropTypes from 'prop-types';

// currying
// https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339



const Authenticate = App => LogIn =>  {
    class extends React.Component {
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
        if (loggedIn) {
            return <App/>
        }
        else {
            return <LogIn/>
        }
    }
}
}

export default Authenticate;