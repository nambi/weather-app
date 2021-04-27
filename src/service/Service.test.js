import { render, screen } from '@testing-library/react';
import Service from './Service';
import WeatherService from './WeatherService';
import LocationService from './LocationService';

describe("Service Tests", () => {
    let appContext = {
        setState: function () {

        }
    };

    test('test getCities', () => {

        let myCities = new LocationService({}).getZipCities();
        expect(myCities.length > 0);

    });

    test('test getCurrentWeatherDefault', () => {

        let myWeather = new WeatherService(appContext).getCurrentWeatherDefault();
        expect(myWeather.name === 'East Windsor');
        expect(myWeather.weather).toHaveLength(1);

    });

    test('test getHourlyWeather', () => {

        let myWeather = new WeatherService(appContext).getHourlyWeather();
        expect(myWeather).toBeDefined;

    })
});