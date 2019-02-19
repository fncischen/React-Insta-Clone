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

        // blocker 1) formatting or refactoring JSON - like data from something you
        // to a format you can work with. 
        this.data = this.props.data; 


        this.username = this.data.username;
        this.thumbnail = this.data.thumbnailUrl;
        this.image = this.data.imageUrl;
        // blocker 2) using propstype to ensure type safety. 

        // state data that will change include
        
            // amount of comments
            // amount of likes 
            // timestamp of post

        this.state = {
            // note : always think about the most optimal way to structure this data. 
            comments: this.data.comments,
            likeAmount: this.data.likes,
            timeStamp: this.data.timestamp
        }

    }

    // call back method ("the controller") that event handler in AddComment Component calls to add an additional
    // comment component (using this.setState) 
    addComment() {

    }

    render() {
             
            return (

            <div className="post-container">

                <img src={this.image}/>

                <div className="icons-section">
                
                    <div className="icons">
                     
                        <div className="heart"> ♡ </div>

                        <div className="add-comment-logo">✍</div>

                    </div>

                    <b>{this.state.likeAmount} likes</b>

                </div>

                <div className = "comments-section">

                    { // put prop types check here
                        
                        this.state.comments.map(comment => 
                        <Comment posterName={comment.username} commented={comment.text} />
                    )}

                </div>
                

            </div> 

            );
            
    }
    
}

PostContainer.propTypes = {
    postObject: PropTypes.shape({
        username: PropTypes.string,
        thumbnail: PropTypes.string,
        image: PropTypes.string
    })
};

export default PostContainer;