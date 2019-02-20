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

  constructor() {
    super();

    this.state = {
      instagramPosts: []
    };

  }

  componentDidMount() {
    console.log("CDM Running!");
    this.setState( {instagramPosts: dummyData});
  }

  render() {

    console.log("test",this.state.instagramPosts);

    // ok now I know where I'm messing up.

    // since the examples depend on map(), on the first render, 
    // since the array is empty, it won't create any PostContainer
    // components. Thus, it won't be forced to ask --

    // what is this "this.props.data.imageUrl"?
    
    // if I just declared the PostContainer literally:
    
    // on the first frame for rendering [before componentDidMount], it would cause the browser to search for
    // "this.props.blahblahblah", and React would crash:

    return (
      <div className="instagram-clone">
        <SearchBarHeader />
        {this.state.data.map()}
      </div>
    );

  }
}

export default App;
