import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from "./Comment";

class CommentSection extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            comments: []

        }
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments
        })
    }

    addComment = e => {

        e.preventDefault();

        this.setState({
            comments: [..comments ]
        })
    }

    handleChanges = e => {
        console.log(e.target.value);
        //     this.setState({ name: e.target.value })
        this.setState({
          [e.target.name]: e.target.value
    })
    };


    // https://reactjs.org/docs/forms.html
    render() {
        return (
            <div className="comment-section">
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