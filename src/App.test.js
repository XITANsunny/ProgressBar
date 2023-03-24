import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders bars demo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Progress Bars Demo/i);
  expect(linkElement).toBeInTheDocument();
});

test('increse and decrease numbers contain -10', () => {
  expect(avalibleChangePercentage).toContain(-25);
});

it('Renders with a className equal to the variant', () => {
  const { container } = render(<App/>)
  expect(container.getElementsByClassName('ChangeButton').length).toBe(4);
});

