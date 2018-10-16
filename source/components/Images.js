import React, { Component } from 'react';
import Profile from '../components/Profile';

export default class Content extends Component {
    render() {
        return (
            <div className = 'content'>
                <Profile />
                <div>Images</div>
            </div>
        );
    }
}
