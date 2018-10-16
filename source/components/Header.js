import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className = 'header'>
                <input
                    placeholder = 'Search'
                    type = 'text'
                />
            </div>
        );
    }
}
