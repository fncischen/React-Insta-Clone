import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarHeader extends Component {
    constructor(props){
        super(props);

        this.state = {
            search_text: ""
        }

    }

    // handle all relevant changes on search bar 
    handleChange() {

    }

    render() {
        return (
            <div className="search-bar-header">
            
            <input type="search" className="site-search" name="q" aria-label="Search for users, hashtags, or posts" />

            </div>
        );
    }
}

export default SearchBarHeader;