import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import List from '../List';

const MockList= ()=> {
    return (<BrowserRouter>
            <List />
        </BrowserRouter>
    )
};

describe("Item component", ()=>{
  it('renders Details component', async() => {
  //   render(<MockList />);
  //   const item = screen.getByTestId(/item/i);
  //   expect(item).toBeTruthy();
  });
});