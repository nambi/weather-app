import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

describe("App Component", () => {
  test('renders Support link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Support/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders correctly', () => {
    const tree = renderer.create(<App></App>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});