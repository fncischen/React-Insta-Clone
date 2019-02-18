import React, { Component } from 'react';

const Comment = props => {
    return <div className="comment"><b>{props.posterName}:</b>{props.commented}</div>;
}


export default Comment; 
