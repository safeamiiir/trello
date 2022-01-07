import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ConstantTexts } from 'constants/en';

test('renders project', () => {
  render(<App />);
  const linkElement = screen.getByText(ConstantTexts.project_title);
  expect(linkElement).toBeInTheDocument();
});
