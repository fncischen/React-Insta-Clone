import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import main components
import PostContainer from './Components/PostContainer';
import SearchBarHeader from "./Components/Search";

//
import dummyData from '.././dummy-data';

class App extends Component {
  render() {

    return (
      <div className="instagram-clone">
        <SearchBarHeader />
        <PostContainer data={dummyData}/>
      </div>
    );
  }
}

export default App;
