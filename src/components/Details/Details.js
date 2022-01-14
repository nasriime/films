import React from 'react'
import {useLocation} from 'react-router-dom';

const Details = (props)=> {
    const location = useLocation();
    const {title, director, year} = location.state.item;

    return (
        <div>
            <p>{title}</p>
            <p>{director}</p>
            <p>{year}</p>
        </div>
    )
}

export default Details;