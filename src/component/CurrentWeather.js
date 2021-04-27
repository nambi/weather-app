import React, { Component } from 'react';
import './App.css';
import moment from 'moment';

class CurrentWeather extends Component {

    HEADER = 'Current'

    getCurrentCity = (s) => {
        if (this.props.state.zipCity) {
            return this.props.state.zipCity.city + "," + this.props.state.zipCity.state_id + "," + this.props.state.zipCity.zip;
        } else {
            return 'East Windsor,NJ,08520';
        }
    }

    getCurrentTime = (s) => {
        let time = undefined;
        let defaultTime = new Date('December 17, 1995 03:24:00').getTime();
        if (this.props.state.currentWeather) {
            time = moment(this.props.state.currentWeather.time).format('hh:mm A');
        } else {
            time = moment(defaultTime).format('hh:mm A');
        }
        return 'As of ' + time;
    }
    getCurrentTemp = (s) => {
        let t = undefined;
        if (this.props.state.currentWeather) {
            t = this.props.state.currentWeather.currentTemp;
        } else {
            t = '70';
        }
        return t + '\u00b0 ' + this.props.state.format;
    }

    getCurrentDesc = (s) => {
        if (this.props.state.currentWeather) {
            return this.props.state.currentWeather.mainDesc;
        } else {
            return 'Sunny';
        }
    }

    render() {

        return (<div className="container current-weather-container">
            <div className="row">
                <div colSpan="3" className="col"><h3>{this.HEADER}</h3></div>
            </div>
            <div className="row">
                <div className="col"><strong>{this.getCurrentCity()} <br /></strong> {this.getCurrentTime()}</div>
                <div className="col">{this.getCurrentTemp()}</div>
                <div className="col"> {this.getCurrentDesc()}</div>
            </div>
        </div>);

    }
};

export default CurrentWeather;