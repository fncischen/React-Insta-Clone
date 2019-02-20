import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from "./Comment";

class CommentSection extends Components {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment-section">
            {props.comments.map(comment => 
                <Comment posterName={comment.username} commented={comment.text} />
            )}
            </div>
        );
    }
}

export default CommentSection;