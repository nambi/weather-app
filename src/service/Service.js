import Model from './Model';
import RESTClient from './RESTClient';
import DataTransform from './DataTransform';

const Service = {
    getZipCities() {
        return Model.USZip;
    },
    getCurrentWeatherDefault(zipCity) {
        return Model.CurrentWeather;
    },
    getCurrentWeather(appScope, selectedCity) {
        let that = this;
        let result = Model.CurrentWeather;

        if (selectedCity) {
            let units = 'imperial';
            let query = selectedCity.city + ',' + selectedCity.state_id + ',USA&units=' + units;
            let options = {
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + query + '&APPID=722b7f47e0d860226dd9f348ed8430d3',
                method: 'GET'
            };
            //options.url = 'http://google.com';
            options.url = options.url + '&ts=' + new Date().getTime();
            RESTClient.makeRequest(options, that,
                function (response) {
                    let cw = DataTransform.processCurrentWeatherSuccess(response)
                    appScope.setState({ currentWeather: cw, zipCity: selectedCity,loading:false })
                },
                function (response) {
                    let cw = DataTransform.processCurrentWeatherFailure(response)
                    appScope.setState({ currentWeather: cw, zipCity: selectedCity,loading:false })
                }
            );
        }

        return result
    },
    getHourlyWeather() {
        return Model.HourlyWeather;
    },


};

export default Service;