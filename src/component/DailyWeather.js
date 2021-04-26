import React, { Component } from 'react';
import './App.css';

class DailyWeather extends Component {

    render() {

        return (<div className="container daily-weather-container">
            <div className="row">
                <div colSpan="3" className="col"><h3>10 Day Forecast</h3></div>
            </div>
            <div className="row">
                <div className="col">4/26</div>
                <div className="col">63&deg; F</div>
                <div className="col">1% rain</div>
            </div>
            <div className="row">
                <div className="col">4/27</div>
                <div className="col">63&deg; F</div>
                <div className="col">1% rain</div>
            </div>
        </div>);
    }

};

export default DailyWeather;