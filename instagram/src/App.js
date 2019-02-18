import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import main components
import PostContainer from './Components/PostContainer';
import SearchBarHeader from "./Components/Search";


class App extends Component {
  render() {
    return (
      <div className="instagram-clone">
        <SearchBarHeader />
        <PostContainer image={} logo={} name={}/>
      </div>
    );
  }
}

export default App;
