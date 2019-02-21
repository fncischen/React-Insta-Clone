import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LogIn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    handleChanges = e => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    logIn = e => {
        e.preventDefault();
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        window.location.reload();
      };

    render() {

        console.log("Logged in!");

        return (
            <div className = "LogInBox">

            <input
            type="text"
            value={this.state.username}
            placeholder= "username"
            name="username"
            onChange={this.handleChanges}
            />

            <input
            type="text"
            placeholder= "password"
            name="password"
            value={this.state.password}
            onChange={this.handleChanges}
            />

            <button onClick={this.logIn}>Sign in</button>

            </div>
        )
    }
}

export default LogIn;