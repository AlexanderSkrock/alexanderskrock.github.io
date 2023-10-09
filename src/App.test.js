import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders under construction info', () => {
  render(<App />);
  const textElement = screen.getByText(/under construction!/i);
  expect(textElement).toBeInTheDocument();
});
