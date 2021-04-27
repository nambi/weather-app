import React, { Component } from 'react';
import './App.css';

class Header extends Component {

    HEADER_CONTENT = 'Weather App';
    render() {

        return (
            <header className="App-header">
                <p>{this.HEADER_CONTENT}</p>
            </header>
        );
    }
};

export default Header;