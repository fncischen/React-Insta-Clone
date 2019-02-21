import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import './index.css';
import "./PostContainer.css";
import "./Comments.css";
import "./SearchBoxHeader.css";

// import main components
import PostContainer from './Components/PostContainer';
import PostPage from './Components/PostPage';

// import authentiticate HOC which has conditional rendering
import Authenticate from "./Components/Authetnication/Authenticate";

// import LogIn 
import LogIn from "./Components/Login"; 

// import dummyData
import dummyData from "./dummy-data";


class App extends Component {

  constructor() {
    super();

    this.state = {
      instagramPosts: []
    };

}

  componentDidMount() {
     console.log("CDM Running!");
     this.setState( {instagramPosts: dummyData});
     console.log("inside PostPage",this.state.instagramPosts);
  }

  render() {

    return (
      <div className="instagram-clone">
        {/* {this.state.instagramPosts.map(InstagramPost =>
          <PostContainer data={InstagramPost}/>
        )} */}

        {Authenticate(<PostPage instagramPosts={this.state.instagramPosts}/>)(LogIn)}
        
      </div>
    );

  }
}

export default App;
