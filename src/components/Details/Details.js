import React from 'react';
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Details = (props)=> {
    const location = useLocation();
    const {title, director, year} = location.state.item;
    let navigate = useNavigate();

    return (
        <div>
            <button className="go-back" onClick={()=> navigate("/")}>Go back</button>
            <p>{title}</p>
            <p>{director}</p>
            <p>{year}</p>
        </div>
    )
}

export default Details;