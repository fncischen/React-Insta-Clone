import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import './index.css';
import "./PostContainer.css";
import "./Comments.css";
import "./SearchBoxHeader.css";

// import main components
import PostContainer from './Components/PostContainer';
import PostPage from './Components/PostContainer';
import SearchBarHeader from "./Components/Search";


class App extends Component {


  render() {

    return (
      <div className="instagram-clone">
        {/* {this.state.instagramPosts.map(InstagramPost =>
          <PostContainer data={InstagramPost}/>
        )} */}

        <PostPage />
        
      </div>
    );

  }
}

export default App;
