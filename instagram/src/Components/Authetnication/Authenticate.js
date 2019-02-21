import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Authenticate = App => LogIn =>  {
    class extends React.Component {
    // leverage conditional rendering 
    // https://reactjs.org/docs/conditional-rendering.html
    render() {
        if (localStorage.getItem("username") && localStorage.getItem("password")) {
            return <App/>
        }
        
        return <LogIn/>
        }
    }
}

export default Authenticate;