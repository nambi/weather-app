import { render, screen } from '@testing-library/react';
import Search from './Search';

test('renders select component', () => {
  let scope = {
    state: {
      zipCities: [],
      zipCity: {city:'mycity'}
    },
    handleChange(){

    }
  };
  render(<Search {...scope} />);
  const linkElement = screen.getByText(/mycity/i);
  expect(linkElement).toBeInTheDocument();
});
