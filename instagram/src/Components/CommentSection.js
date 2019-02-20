import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from "./Comment";

class CommentSection extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            comments: [],
            new_comment: ""
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
                likeAmount: likeAmount + 1,
                liked: true
            })
        }
        else {
            this.setState({
                likeAmount: likeAmount - 1,
                liked: false
            })
        }
    }

    addComment = e => {

        e.preventDefault();

        // use spread operator 
        this.setState({
            comments: [... comments, new_comment ]
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
                    
                        <div className="heart" onClick={addLike}> ♡ </div>

                        <div className="add-comment-logo">✍</div>

                    </div>

                    {<b>{this.state.likeAmount} likes</b>}

                </div>

            {this.state.comments.map(comment => 
                <Comment posterName={comment.username} commented={comment.text} />
            )}

            <form>
            <input type="submit" maxLength="1000" onChange={handleChanges}></input>
            </form>
            </div>
        );
    }
}

export default CommentSection;