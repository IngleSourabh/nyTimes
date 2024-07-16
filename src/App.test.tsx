import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Stay Informed. Stay Ahead./i);
  expect(linkElement).toBeInTheDocument();
});

test('checking ',()=>{
  render(<App />);
  const check = screen.getByText(/We bring you the latest news from around the globe/i);
  expect(check).toBeInTheDocument();
})
