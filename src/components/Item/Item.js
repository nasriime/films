import React from 'react'
import { useNavigate } from "react-router-dom";

const Item = ({item})=> {
    const {title, director, year} = item;
    let navigate = useNavigate();


    return (
        <div onClick={()=>{ navigate("/details", {
            state: {
              item
            }
          }) 
        }}>
            <p>{title}</p>
            <p>{director}</p>
            <p>{year}</p>
        </div>
    )
}

export default Item;