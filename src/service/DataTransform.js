import moment from 'moment-timezone';

const DataTransform = {

    processCurrentWeatherSuccess(response) {

        let currentWeather = {
            mainDesc: response.weather[0].main,
            currentTemp: response.main.temp,
            time: moment.utc(response.dt*1000).utcOffset(response.timezone/60)
        };
        return currentWeather;
    },
    processCurrentWeatherFailure(response) {

        let currentWeather = {
            mainDesc: 'No Data Available',
            currentTemp: '0',
            time: moment().utc()
        };
        return currentWeather;
    }

};

export default DataTransform;