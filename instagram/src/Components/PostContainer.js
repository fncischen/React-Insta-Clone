import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentSection from "./CommentSection.js";

class PostContainer extends Component {

    constructor(props) {
        super(props);


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
    
                        <div className="icons-section">
                    
                            <div className="icons">
                            
                                <div className="heart"> ♡ </div>
        
                                <div className="add-comment-logo">✍</div>
        
                            </div>
    
                            {<b>{this.state.likeAmount} likes</b>}
    
                        </div>

                    <CommentSection comments={this.state.comments} />
    
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

export default PostContainer;