import React, { Component } from 'react';
import './App.css';


class Footer extends Component {
    SUPPORT_EMAIL = 'contact@weatherapp.com';

    render() {
        let linkTo = "mailto:" + this.SUPPORT_EMAIL;
        let linkLablel = 'Support';
        return (
            <footer className="App-footer">
                <a href={linkTo}>{linkLablel}</a>
            </footer>
        );
    }
};

export default Footer;