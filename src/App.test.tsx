import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  render(<App />);
  const h1Element = screen.getByText(/Prime Numbers Multiplication Table/i);
  expect(h1Element).toBeInTheDocument();
});

test('renders input field', () => {
  render(<App />);
  const textElement = screen.getByPlaceholderText(
    /Enter/i
  );
  expect(textElement).toBeInTheDocument();
});

test('renders input field with placeholder text', () => {
  render(<App />);
  const placeHolderElement = screen.getByPlaceholderText(
    /Enter a number limit to generate.../i
  );
  expect(placeHolderElement).toBeInTheDocument();
});

test('renders footer link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yuhcee/i);
  expect(linkElement).toBeInTheDocument();
});
