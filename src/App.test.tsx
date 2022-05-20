import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Name on the screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Johnbosco Nweke/i);
  expect(linkElement).toBeInTheDocument();
});

test('Render button to checkout my blog', async() => {
  render(<App />);
  const button = await screen.findAllByRole('button');
  expect(button).toBeTruthy()
  expect(button[0]).toHaveTextContent('Checkout my blogs')
})