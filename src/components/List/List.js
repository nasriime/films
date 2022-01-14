import React, {useEffect, useState, useCallback}  from 'react'
import Item from "../Item/Item";
import { debounce } from '../../utils';

const List = ()=> {
    const [data, setData] = useState([]);
    const [order, setOrder] = useState('DESC');

    const fetchingData = (url)=>{
        fetch(url)
            .then(res => res.json())
            .then(
              (res) => {
                const sortedArray = res.sort((a,b) => a.title - b.title);
                const uniqueArr  =[...new Map(sortedArray.map(item => [item["title"], item])).values()]
                const result = uniqueArr.splice(0, 10).map((item, idx)=>({
                    id: idx,
                    title: item.title,
                    year: item.release_year,
                    director: item.director
                }));
                setData(result);
              },
              (err) => {
                  console.log('err', err)
              }
            )
    }


    useEffect(() => {
        const url = "https://data.sfgov.org/resource/yitu-d5am.json";
        fetchingData(url);
    }, []);

    const _onChange=(e)=>{
        const title = e.target.value;
        const url = `https://data.sfgov.org/resource/yitu-d5am.json`;
        if(title === ""){
            fetchingData(url);
            return;
        }
        fetchingData(`${url}?title=${title}`);
    }

    const changeSorting = (dir)=>{
        setOrder(dir);
        setData(data.reverse());
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
                    onClick={()=> changeSorting('DESC')} 
                    disabled={order === 'DESC'}>
                        DESC
                </button>
                <button 
                    type="button" 
                    className="btn btn-light" 
                    onClick={()=> changeSorting('ASC')} 
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