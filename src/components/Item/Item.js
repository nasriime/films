import React from 'react'

const Item = ({item})=> {
    const {title, director, year} = item;
    return (
        <div>
            <p>{title}</p>
            <p>{director}</p>
            <p>{year}</p>
        </div>
    )
}

export default Item;