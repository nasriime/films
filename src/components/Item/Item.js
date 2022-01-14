import React from 'react';
import { useNavigate } from "react-router-dom";
import "./styles.scss"

const Item = ({item})=> {
    const {title, director, year} = item;
    let navigate = useNavigate();


    return (
        <div       
          data-testid="singleItem" 
          onClick={()=>{ navigate("/details", {
              state: {
                item
              }
            }) 
          }}
          className='film-item'
        >
            <div className='film-title'>{title} ({year})</div>
            <span className='film-director'>By: {director}</span>
        </div>
    )
}

export default Item;