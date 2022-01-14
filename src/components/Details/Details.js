import React from 'react';
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./styles.scss"

const Details = (props)=> {
    const location = useLocation();
    const {title, director, year, actors, locations, production, writer} = location.state.item;
    let navigate = useNavigate();

    return (
        <>
            <button className="go-back" onClick={()=> navigate("/")}>Go back</button>
            <div className='film-details'> 
                <div className='film-details-title'>{title}</div>
                <div className='film-details-year'>released in {year}</div>
                <div className='film-details-info'>
                    <div><span className='detail-label'>Director </span><span className='film-details-director'>{director}</span></div>
                    <div><span className='detail-label'>Writer </span><span>{writer}</span></div>
                    <div><span className='detail-label'>Actors </span><span>{actors}</span></div>
                    <div><span className='detail-label'>Production </span><span>{production}</span></div>
                    <div><span className='detail-label'>Locations </span><span>{locations}</span></div>
                </div>
            </div>
        </>
    )
}

export default Details;