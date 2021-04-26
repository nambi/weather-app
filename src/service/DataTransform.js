import moment from 'moment';

const DataTransform = {

    processCurrentWeatherSuccess(response) {

        let currentWeather = {
            mainDesc: response.weather[0].main,
            currentTemp: response.main.temp,
            time: response.dt
        };
        return currentWeather;
    },
    processCurrentWeatherFailure(response) {

        let currentWeather = {
            mainDesc: 'No Data Available',
            currentTemp: '0',
            time: moment()
        };
        return currentWeather;
    }

};

export default DataTransform;