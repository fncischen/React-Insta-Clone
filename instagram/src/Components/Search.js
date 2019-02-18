import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarHeader extends Component {
    constructor(props){

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
            
                <input type="text" name="fname" value={this.state.search_text}></input>

            </div>
        );
    }
}

export default SearchBarHeader;