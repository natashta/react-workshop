import React, { Component } from 'react';
import avatar from '../theme/assets/avatars/nasa.jpg';

export default class Profile extends Component {
    render() {
        return (
            <div className = 'profile'>
                <img
                    className = 'avatar'
                    src = { avatar }
                />
            </div>
        );
    }
}
