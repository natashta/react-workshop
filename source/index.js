// Core
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';

export default class Instagram extends Component {
    render() {
        return <div className = 'start'>Поехали!</div>;
    }
}

ReactDOM.render(<Instagram />, document.getElementById('app'));
