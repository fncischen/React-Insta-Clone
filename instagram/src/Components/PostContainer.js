import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentSection from "./CommentSection.js";
import SearchBarHeader from "./Search";

// import dummyData
import dummyData from "./dummy-data";

class PostContainer extends Component {

    constructor(props) {
        super(props);


        // this.state = {
        //         // note : always think about the most optimal way to structure this data. 
        //           comments: this.props.data.comments,
        //           likeAmount: this.props.data.likes,
        //           timeStamp: this.props.data.timestamp,
        //           liked: false 
        // }

    }

    // call back method ("the controller") that event handler in AddComment Component calls to add an additional
    // comment component (using this.setState) 

    render() {

        return (

                <div className="post-container">
    
                    {/* <img src={this.props.data.imageUrl}/>

                    <CommentSection comments={this.state.comments} /> */}
    
                </div> 
            );
                
        }   
        

}

PostContainer.propTypes = {
    postObject: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.object
    })
};

// controls rendering 

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

        // console.log("inside PostPage",this.state.instagramPosts)

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

export default PostContainer;