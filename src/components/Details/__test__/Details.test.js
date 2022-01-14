import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Details from '../Details';

const MockDetails= ()=> {
  return (<BrowserRouter>
          <Details />
      </BrowserRouter>
  )
};

it('renders previous Button ', () => {
  render(<MockDetails />);
  const buttonElement = screen.getByRole("button", { name: /Go back/i });
  fireEvent.click(buttonElement);
  expect(buttonElement).toBeInTheDocument();
});