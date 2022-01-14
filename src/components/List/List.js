import React, {useEffect, useState, useCallback}  from 'react'
import Item from "../Item/Item";
import { debounce } from '../../utils';

const List = ()=> {
    const [data, setData] = useState([]);
    const [order, setOrder] = useState('DESC');


    useEffect(() => {
        const url = "https://data.sfgov.org/resource/yitu-d5am.json";
        fetch(url)
            .then(res => res.json())
            .then(
              (res) => {
                const uniqueArr  =[...new Map(res.map(item => [item["title"], item])).values()]
                const result = uniqueArr.splice(0, 10).map((item, idx)=>({
                    id: idx,
                    title: item.title,
                    year: item.release_year,
                    director: item.director
                }));
                console.log("result", result)
                setData(result);
              },
              (err) => {
                  console.log('err', err)
              }
            )
    }, []);

    

    const _onChange=(e)=>{
        console.log('e.target.value', e.target.value)
    }

    const debouncedChangeHandler = useCallback(
        debounce(_onChange, 300)
    , []);

    return (
        <div>
            <input type="text" onChange={debouncedChangeHandler}/> 
            <div className="ordering--btns">
                <span>Filter by film title:</span>
                <button 
                    type="button" 
                    className="btn btn-light" 
                    onClick={()=> setOrder('DESC')} 
                    disabled={order === 'DESC'}>
                        DESC
                </button>
                <button 
                    type="button" 
                    className="btn btn-light" 
                    onClick={()=> setOrder('ASC')} 
                    disabled={order === 'ASC'}>
                    ASC
                </button>
            </div>
             {data.length > 0 && data.map(item=>(
                <Item key={item.id} item={item} />
                )
             )} 
        </div>
    )
}

export default List;