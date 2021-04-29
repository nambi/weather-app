import React, { Component } from 'react';
import './App.css';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

class Search extends Component {

  loadOptions = (inputValue, callback) => {
    let that = this;
    if (inputValue && inputValue.length > 1) {
      setTimeout(() => {
        callback(that.props.locationService.filterCities(inputValue));
      }, 500);
    }
  }
  render() {
    const { zipCity, zipCities } = this.props.state;
    const asyncSelect = true;

    return (
      <div className="container-fluid search-container">
        <form className="form">
          {!asyncSelect &&
            <div className="form-group">
              <Select
                className="form-select-station"
                name="zipCity"
                value={zipCity}
                getOptionLabel={option =>
                  `${option.city},${option.state_id},${option.zip}`
                }
                getOptionValue={option =>
                  `${option.zip}`
                }
                onChange={this.props.handleChange('zip')}
                options={zipCities}
                placeholder="Select a city"
              />
            </div>
          }
          {asyncSelect &&
            <div className="form-group">
              <AsyncSelect
                className="form-select-station"
                name="zipCity"
                value={zipCity}
                getOptionLabel={option =>
                  `${option.city},${option.state_id},${option.zip}`
                }
                getOptionValue={option =>
                  `${option.zip}`
                }
                cacheOptions
                loadOptions={this.loadOptions}
                defaultOptions={zipCities}
                onChange={this.props.handleChange('zip')}
                placeholder="Select a city"
              />
            </div>
          }
        </form>
      </div>
    );
  }

};

export default Search;