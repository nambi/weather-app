import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import CurrentWeather from './CurrentWeather';
import './App.css';
import Service from './../service/Service';
import moment from 'moment';

class App extends Component {

  state = {
    format: 'F',
    zipCities: [],
    zipCity: undefined,
    currentWeather: {
      mainDesc: '',
      currentTemp: '',
      feelsLike: '',
      time: ''
    },
    hourly: []
  }

  componentDidMount() {
    this.setState({ zipCities: Service.getZipCities() });
    let current = Service.getCurrentWeather();
    this.setState({
      currentWeather: {
        mainDesc: current.weather[0].main,
        currentTemp: current.main.temp,
        time: current.dt
      }
    });
  }

  handleChange = (targetName) => (selectedOption) => {
    let s = selectedOption;
    this.setState({ zipCity: s });
    let current = Service.getCurrentWeather();
    this.setState({
      currentWeather: {
        mainDesc: current.weather[0].main,
        currentTemp: current.main.temp,
        time: current.dt
      }
    });
  }

  handleSearch = (e) => {

    e && e.preventDefault();

  }

  getCurrentCity = (s) => {

    if (this.state.zipCity) {
      return this.state.zipCity.city + "," + this.state.zipCity.state_id + "," + this.state.zipCity.zip;
    } else {
      return 'East Windsor,NJ,08520';
    }

  }

  getCurrentTime = (s) => {
    let time = undefined;
    if (this.state.currentWeather) {
      time = moment(this.state.currentWeather.time).format('hh:mm A');

    } else {
      time = moment().format('hh:mm A');
    }
    return 'As of ' + time;
  }
  getCurrentTemp = (s) => {
    let t = undefined;
    if (this.state.currentWeather) {
      t = this.state.currentWeather.currentTemp;
    } else {
      t = '70';
    }

    return t + '\u00b0 ' + this.state.format;

  }

  getCurrentDesc = (s) => {

    if (this.state.currentWeather) {

      return this.state.currentWeather.mainDesc;
    } else {
      return 'Sunny';
    }

  }

  render() {
    const { zipCities, zipCity, currentWeather } = this.state;

    return (
      <div className="App">
        <Header />
        <div className="container-fluid main-container">
          <Search {...this} />
          <div className="container-fluid search-results">
            <CurrentWeather {...this} />
            <HourlyWeather {...this} />
            <DailyWeather {...this} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
