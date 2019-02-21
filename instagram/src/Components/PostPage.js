import React, { Component } from 'react';
import SearchBarHeader from "./Search";
import PostContainer from './PostContainer';

import dummyData from "./dummy-data.js";

class PostPage extends Component {

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

        console.log("inside PostPage",this.props.instagramPosts)

        return(
        
            <div className="Post-Page">
                <SearchBarHeader />
                 {this.state.instagramPosts.map(InstagramPost =>
                 <PostContainer data={InstagramPost}/>
                 )}   
            </div>
        );

    }
}

export default PostPage; 