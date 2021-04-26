import React, { Component } from 'react';
import './App.css';


class CurrentWeather extends Component {
    render() {

        return (<div className="container current-weather-container">
            <div className="row">
                <div colSpan="3" className="col"><h3>Current</h3></div>
            </div>
            <div className="row">
                <div className="col"><strong>{this.props.getCurrentCity()} <br/></strong> {this.props.getCurrentTime()}</div>
                <div className="col">{this.props.getCurrentTemp()}</div>
                <div className="col"> {this.props.getCurrentDesc()}</div>
            </div>
        </div>);

    }
};

export default CurrentWeather;