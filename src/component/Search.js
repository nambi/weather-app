import React, { Component } from 'react';
import './App.css';
import Select from 'react-select';


class Search extends Component {
    
render(){

    const { zipCities, zipCity} = this.props.state;

    return (
        <div className="container-fluid search-container">
        <form className="form">
          <div className="form-group">
            <Select
              className="form-select-station"
              name="zipCity"
              value={zipCity}
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