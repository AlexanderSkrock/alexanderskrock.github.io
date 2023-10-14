import React from 'react';
import { MemoryRouter } from 'react-router-dom'

import { render, screen } from '@testing-library/react';

import App from './App';

test('renders under construction info', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  const elements = screen.getAllByAltText(/maintenance/i);
  expect(elements).toHaveLength(1);
  expect(elements[0]).toBeInTheDocument();
});
