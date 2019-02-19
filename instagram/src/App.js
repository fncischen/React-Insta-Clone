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

  constructor(props) {
    super(props);

    console.log(dummyData);
    this.state = {
      data: []
    }

  }

  componentWillMount() {
    console.log("CDM Running!");
    this.setState(
      {data: dummyData}
      );
  }

  render() {

    return (
      <div className="instagram-clone">
        <SearchBarHeader />
        <PostContainer data={this.state.data[0]} />
        <PostContainer data={this.state.data[1]} />
        <PostContainer data={this.state.data[2]} />
      </div>
    );
  }
}

export default App;
