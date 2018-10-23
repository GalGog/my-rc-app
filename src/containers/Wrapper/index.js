import React, { Component } from 'react';
import App from '../../App';
import Game from '../../index';

class Wrapper extends Component {
    render() {
        return (
            <div className="Wrapper">
                <App />
                <Game />
            </div>
        );
    }
}

export default Wrapper;
