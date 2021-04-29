import React, { Component } from 'react';
import './App.css';
import moment from 'moment';

class CurrentWeather extends Component {

    HEADER = 'Current'

    getCurrentCity = (s) => {
        if (this.props.state.zipCity) {
            return this.props.state.zipCity.city + "," + this.props.state.zipCity.state_id + "," + this.props.state.zipCity.zip;
        } else {
            return 'East Windsor,NJ,8520';
        }
    }

    getCurrentTime = (s) => {
        let time = undefined;
        let defaultTime = new Date().getTime();
        
        if (this.props.state.currentWeather) {
            let m  = this.props.state.currentWeather.time;
            time = m.format('hh:mm A');
        } else {
            time = moment(defaultTime).format('hh:mm A');
        }
        return 'As of ' + time;
    }
    getCurrentTemp = (s) => {
        let t = undefined;
        if (this.props.state.currentWeather.currentTemp) {
            t = this.props.state.currentWeather.currentTemp;
            t = t + '\u00b0 ' + this.props.state.format;
        } else {
            t = 'No Data Avaialble';
        }
        return t;
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