import Model from './Model';

const Service = {
    getZipCities() {
        return Model.USZip;
    },
    getCurrentWeather() {
        return Model.CurrentWeather;
    },
    getHourlyWeather() {
        return Model.HourlyWeather;
    }
};

export default Service;