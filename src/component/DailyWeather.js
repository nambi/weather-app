import React, { Component } from 'react';
import './App.css';

class DailyWeather extends Component {
    HEADER = '10 Day Forecast';

    constructor(props) {
        super(props);
        this.dailyData = this.props.weatherService.get10DayWeather();       
    }

    render() {

        return (<div className="container daily-weather-container">
            <div className="row">
                <div colSpan="3" className="col"><h3>{this.HEADER}</h3></div>
            </div>
            {this.dailyData.map(item => (
                <div key={item.id} className="row">
                    <div className="col">{item.date}</div>
                    <div className="col">{item.temp}&deg;{this.props.DEFAULT_UNITS_FORMAT}</div>
                    <div className="col">{item.mainDesc}</div>
                </div>

            ))}

        </div>);
    }

};

export default DailyWeather;