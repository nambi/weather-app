import Service from './Service';
import Model from './Model';
import RESTClient from './RESTClient';
import DataTransform from './DataTransform';
import moment from 'moment';

class WeatherService extends Service {

    OPEN_WEATHER_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather';
    OPEN_WEATHER_APPID = '722b7f47e0d860226dd9f348ed8430d3';

    getCurrentWeatherDefault(zipCity) {
        return DataTransform.processCurrentWeatherSuccess(Model.CurrentWeather);
    }
    getHourlyWeather() {
        let hour1 = moment().add(1, 'hours').format('hh:mm A');
        let hour2 = moment().add(2, 'hours').format('hh:mm A');
        return [
            {
                id: 1,
                date: hour1,
                temp: '58',
                mainDesc: 'Rain'
            },
            {
                id: 2,
                date: hour2,
                temp: '60',
                mainDesc: 'Clouds'
            }
        ];
    }

    get10DayWeather() {
        let day1 = moment().add(1, 'days').format('MM/DD');
        let day2 = moment().add(2, 'days').format('MM/DD');
        return [
            {
                id: 1,
                date: day1,
                temp: '62',
                mainDesc: 'Clouds'
            },
            {
                id: 2,
                date: day2,
                temp: '64',
                mainDesc: 'Sunny'
            }
        ];
    }
    getCurrentWeather(selectedCity) {
        let that = this;
        let result = this.getCurrentWeatherDefault();

        if (selectedCity) {
            let city = selectedCity.city.replace(/ /g, '+');
            let query = city + ',' + selectedCity.state_id + ',' + that.DEFAULT_COUNTRY + '&units=' + that.DEFAULT_UNITS;
            let options = {
                url: that.OPEN_WEATHER_ENDPOINT + '?q=' + query + '&APPID=' + that.OPEN_WEATHER_APPID,
                method: 'GET'
            };
            //options.url = 'http://google.com';
            options.url = options.url + '&ts=' + new Date().getTime();
            RESTClient.makeRequest(options, that,
                function (response) {
                    let cw = DataTransform.processCurrentWeatherSuccess(response)
                    that.updateAppState({ currentWeather: cw, zipCity: selectedCity, loading: false })
                },
                function (response) {
                    let cw = DataTransform.processCurrentWeatherFailure(response)
                    that.updateAppState({ currentWeather: cw, zipCity: selectedCity, loading: false })
                }
            );
        }

        return result
    }

}

export default WeatherService;