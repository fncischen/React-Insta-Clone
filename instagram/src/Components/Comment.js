import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return <div className="comment"><b>{props.posterName}:</b>{props.commented}</div>;
}

// proptype => act as a gatekeeper or filter that will show up on console
// https://labnotes.panderalabs.com/shaping-up-your-react-components-with-proptypes-shape-and-selectors-9d1111d0566f

Comment.propTypes = {
    isName = props.posterName.
}

export default Comment; 
