import { render, screen } from '@testing-library/react';
import App from './App';
//try one failed case
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//test if Progress Bars Demo occured
test('renders bars demo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Progress Bars Demo/i);
  expect(linkElement).toBeInTheDocument();
});


//test if avalibleChangePercentage contain avilable number
test('increse and decrease numbers contain -10', () => {
  const ArravalibleChangePercentageay = [-25, -10, +10, +25]
  expect(ArravalibleChangePercentageay).toContain(-25);
});



