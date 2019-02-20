import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from "./Comment";

class CommentSection extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment-section">
            {this.props.comments.map(comment => 
                <Comment posterName={comment.username} commented={comment.text} />
            )}
            </div>
        );
    }
}

export default CommentSection;