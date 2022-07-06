import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

jest.mock("react-dom", () => {
  const reactDom = jest.requireActual("react-dom");
  return {
    ...reactDom,
    render: jest.fn(),
  };
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Design Patterns/i);
  expect(linkElement).toBeInTheDocument();
});

