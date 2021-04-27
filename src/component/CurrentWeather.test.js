import { render, screen } from '@testing-library/react';
import CurrentWeather from './CurrentWeather';
import renderer from 'react-test-renderer';

describe("Current Weather Component", () => {
  let app = {
    state: {
      zipCity: {
        zip: '08520',
        city: 'East Windsor',
        state_id: 'NJ'
      }
    }
  };

  test('renders Support link', () => {
    render(<CurrentWeather {...app} />);
    const linkElement = screen.getByText(/Current/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders correctly', () => {
    const tree = renderer.create(<CurrentWeather {...app}></CurrentWeather>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('getCurrentCity correctly', () => {

    let cwInstance = new CurrentWeather(app);
    let result = cwInstance.getCurrentCity();
    expect(result).toBeDefined;
  });

  test('getCurrentTime correctly', () => {

    let cwInstance = new CurrentWeather(app);
    let result = cwInstance.getCurrentTime();
    expect(result).toBeDefined;

  });

  test('getCurrentTemp correctly', () => {

    let cwInstance = new CurrentWeather(app);
    let result = cwInstance.getCurrentTemp();
    expect(result).toBeDefined;

  });

  test('getCurrentDesc correctly', () => {

    let cwInstance = new CurrentWeather(app);
    let result = cwInstance.getCurrentDesc();
    expect(result).toBeDefined;

  });


});