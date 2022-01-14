import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Item from '../Item';

const item = {
    id: 1,
    title: "",
    direactor: "",
    year: ""
}

const MockItem= ()=> {
  return (<BrowserRouter>
          <Item item={item} />
      </BrowserRouter>
  )
};

describe("Item component", ()=>{
    it('renders test ID', () => {
      render(<MockItem />);
      const linkElement = screen.getByTestId("singleItem");
      expect(linkElement).toBeInTheDocument();
    });
});