import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio title', () => {
  render(<App />);
  const titleElement = screen.getByText(/My Portfolio/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders Lakshay Kakkar name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Lakshay Kakkar/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders IIT Delhi information', () => {
  render(<App />);
  const iitElement = screen.getByText(/Indian Institute of Technology, Delhi/i);
  expect(iitElement).toBeInTheDocument();
});
