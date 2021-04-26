import React, { Component } from 'react';
import './App.css';


class HourlyWeather extends Component {

    render() {
        return (
            <div className="container hourly-weather-container" >
                <div className="row">
                    <div colSpan="3" className="col"><h3>Hourly Forecast</h3></div>
                </div>
                <div className="row">
                    <div className="col">7 pm</div>
                    <div className="col">63&deg; F</div>
                    <div className="col">1% rain</div>
                </div>
                <div className="row">
                    <div className="col">8 pm</div>
                    <div className="col">63&deg; F</div>
                    <div className="col">1% rain</div>
                </div>
            </div>);
    }
};

export default HourlyWeather;