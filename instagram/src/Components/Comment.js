import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return <div className="comment"><b>{props.posterName}:</b>{props.commented}</div>;
}


export default Comment; 
