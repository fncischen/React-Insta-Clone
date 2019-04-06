import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from "styled-components";

import PropTypes from 'prop-types';
import Comment from "./Comment";


class CommentSection extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            comments: [],
            new_comment: "",
            likes: this.props.likes,
            liked: false
        }
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments
        })
    }

    addLike = e => {
        if (this.state.liked == false) {
            this.setState({
                likes: this.state.likes + 1,
                liked: true
            })
        }
        else {
            this.setState({
                likes: this.state.likes - 1,
                liked: false
            })
        }
    }

    addComment = e => {

        e.preventDefault();

        const newComment = {
            username: "dummy_user",
            text: this.state.new_comment
        }
        // use spread operator 
        this.setState({
            comments: [... this.state.comments, newComment ]
        })
    }

    handleChanges = e => {
        console.log(e.target.value);
        //     this.setState({ name: e.target.value })
        this.setState({
          new_comment: e.target.value
    })
    };


    // https://reactjs.org/docs/forms.html
    render() {
        return (
            <div className="comment-section">

                <div className="icons-section">
                    
                    <div className="icons">
                    
                        <div className="heart" onClick={this.addLike}> ♡ </div>

                        <div className="add-comment-logo">✍</div>

                    </div>

                    {<b>{this.state.likes} likes</b>}

                </div>

            {this.state.comments.map(comment => 
                <Comment posterName={comment.username} commented={comment.text} />
            )}

            <form>
            <Input type="textarea" onChange={this.handleChanges} onSubmit={this.addComment}/>
            </form>
            </div>
        );
    }
}

export default CommentSection;