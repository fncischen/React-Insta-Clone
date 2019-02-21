import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentSection from "./CommentSection.js";
import SearchBarHeader from "./Search";

class PostContainer extends Component {

    constructor(props) {
        super(props);

        console.log(this.props.data);

         this.state = {
                 // note : always think about the most optimal way to structure this data. 
                comments: this.props.data.comments,
                likeAmount: this.props.data.likes,
                timeStamp: this.props.data.timestamp,
                liked: false 
        }

    }

    // call back method ("the controller") that event handler in AddComment Component calls to add an additional
    // comment component (using this.setState) 

    render() {

        return (

                <div className="post-container">
    
                     <img src={this.props.data.imageUrl}/>

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
export default PostContainer;