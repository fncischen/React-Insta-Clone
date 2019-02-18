import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from "./Comment";
import AddComment from './AddComment';

class PostContainer extends Component {

        
    constructor(props) {
        super(props);

        // properties that will be immutable

            // image 
            // logo
            // name of instagram account

            // post description

        this.image = this.props.image;
        this.logo = this.props.logo;
        this.name = this.props.name; 

        this.description = this.props.description;

        // state data that will change include
        
            // amount of comments
            // amount of likes 
            // timestamp of post

        this.state = {
            // note : always think about the most optimal way to structure this data. 
            comments: this.props.comments, 
            commentAmount: 0,
            likeAmount: 0,
            // calcuate the timestamp using a method
            timeStamp: ""
        }

    }

    // call back method ("the controller") that event handler in AddComment Component calls to add an additional
    // comment component (using this.setState) 
    addComment() {

    }

    render() {
             
            return (

            <div className="post-container">
            
                <div className="icons-section">
                
                    <div className="icons">
                     
                        <div className="heart"> ♡ </div>

                        <div className="add-comment-logo">✍</div>

                    </div>

                    <b>{this.state.likeAmount} likes</b>

                </div>

                <div className = "comments-section">

                    {this.state.comments.map(comment => 
                        <Comment posterName={this.name} commented={comment} />
                    )}

                </div>
                

            </div> 

            );
            
    }
    
}

export default PostContainer;