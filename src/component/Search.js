import React, { Component } from 'react';
import './App.css';
import Select from 'react-select';


class Search extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { zipCity, zipCities } = this.props.state;
    // const zipCities  = this.props.zipCities;
    // const zipCity = this.props.zipCity;

    return (
      <div className="container-fluid search-container">
        <form className="form">
          <div className="form-group">
            <Select
              className="form-select-station"
              name="zipCity"
              value={zipCity}
              getOptionLabel={option =>
                `${option.city},${option.state_id}`
              }
              getOptionValue={option =>
                `${option.zip}`
              }
              onChange={this.props.handleChange('zip')}
              options={zipCities}
              placeholder="Select a city"
            />
          </div>
        </form>
      </div>
    );
  }

};

export default Search;