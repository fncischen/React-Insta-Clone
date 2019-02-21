import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import './index.css';
import "./PostContainer.css";
import "./Comments.css";
import "./SearchBoxHeader.css";
import "./LogIn.css";

// import main components
import PostContainer from './Components/PostContainer';
import PostPage from './Components/PostPage';

// import authentiticate HOC which has conditional rendering
import Authenticate from "./Components/Authetnication/Authenticate";

// import LogIn 
import LogIn from "./Components/Login/LogIn"; 

// import dummyData
import dummyData from "./dummy-data";
 
// where to declare HOC
const HOC = Authenticate(PostPage, LogIn);

class App extends Component {

  render() {

    return (
      <div className="instagram-clone">

        <HOC />

      </div>
    );

  }
}

export default App;
