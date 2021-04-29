import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import CurrentWeather from './CurrentWeather';
import './App.css';
import WeatherService from './../service/WeatherService';
import LocationService from './../service/LocationService';

/**
 * App parent component 
 */
class App extends Component {
  DEFAULT_UNITS_FORMAT = 'F';
  constructor(props) {
    super(props);
    this.weatherService = new WeatherService(this);
    this.locationService = new LocationService(this);
    let defaultWeather = this.weatherService.getCurrentWeatherDefault();
    let cities = this.locationService.getZipCities();
    let defaultCity = this.locationService.getDefaultZipCity();
    this.state = {
      format: this.DEFAULT_UNITS_FORMAT,
      zipCities: cities,
      zipCity: defaultCity,
      currentWeather: defaultWeather
    }
  }

  componentDidMount() {
    console.log('App is mounted successfully');
  }

  handleChange = (targetName) => (selectedOption) => {
    
    if (selectedOption && selectedOption.zip) {
      this.weatherService.getCurrentWeather(selectedOption);
      this.setState({ loading: true });
    }
  }
  render() {
    const { loading } = this.state;
    const isExtendedDataAvailable = false;
    return (
      <div className="App">
        <Header />
        <div className="container-fluid main-container">
          <Search {...this} />
          {loading &&
            <div id="loading">
            </div>
          }
          {!loading &&
            <div className="container-fluid search-results">
              <CurrentWeather {...this} />
              {isExtendedDataAvailable &&
                <div>
                  <HourlyWeather {...this} />
                  <DailyWeather {...this} />
                </div>
              }
            </div>
          }
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
