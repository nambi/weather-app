import { render, screen } from '@testing-library/react';
import Service from './Service';

test('test getCities', () => {

    let myCities = Service.getZipCities();
    expect(myCities.length > 0);

});

test('test getCurrentWeatherDefault', () => {

    let myWeather = Service.getCurrentWeatherDefault();
    expect(myWeather.name === 'East Windsor');
    expect(myWeather.weather).toHaveLength(1);

});

test('test getHourlyWeather', () => {

    let myWeather = Service.getHourlyWeather();
    expect(myWeather).toBeDefined;

});