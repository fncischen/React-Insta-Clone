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

    this.state = {
      instagram_data: null
    }

  }

  // how to fetch data 
  // https://www.robinwieruch.de/react-fetching-data/
  componentDidMount() {
    fetch('./dummy-data.js')
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ instagram_data: data.dummyData });
    })
    .catch(err => {
      throw new Error(err);
    });
  }

  render() {

    return (
      <div className="instagram-clone">
        <SearchBarHeader />
        <PostContainer data={dummyData[0]} />
      </div>
    );
  }
}

export default App;
