import React, { Component } from 'react';
import SearchBarHeader from "./Search";
import PostContainer from './PostContainer';

class PostPage extends Component {

    render() {

        console.log("inside PostPage",this.props.instagramPosts)

        return(
        
            <div className="Post-Page">
                <SearchBarHeader />
                 {this.props.instagramPosts.map(InstagramPost =>
                 <PostContainer data={InstagramPost}/>
                 )}   
            </div>
        );

    }
}

export default PostPage; 