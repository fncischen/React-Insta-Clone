import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import './index.css';
import "./PostContainer.css";
import "./Comments.css";
import "./SearchBoxHeader.css";



// import main components
import PostContainer from './Components/PostContainer';
import SearchBarHeader from "./Components/Search";

// import dummyData
import dummyData from './dummy-data';

class App extends Component {
  render() {

    return (
      <div className="instagram-clone">
        <PostContainer data={dummyData[0]} />
      </div>
    );
  }
}

export default App;
