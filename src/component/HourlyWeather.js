import React, { Component } from 'react';
import './App.css';

class HourlyWeather extends Component {

    HEADER = 'Hourly Forecast';
    constructor(props){
        super(props);
        this.hourlyData = this.props.weatherService.getHourlyWeather();
    }
    render() {
        return (
            <div className="container hourly-weather-container" >
                <div className="row">
                    <div colSpan="3" className="col"><h3>{this.HEADER}</h3></div>
                </div>
                {this.hourlyData.map(item => (
                <div key={item.id} className="row">
                    <div className="col">{item.date}</div>
                    <div className="col">{item.temp}&deg;{this.props.DEFAULT_UNITS_FORMAT}</div>
                    <div className="col">{item.mainDesc}</div>
                </div>

            ))}
            </div>);
    }
};

export default HourlyWeather;