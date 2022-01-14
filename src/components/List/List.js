import React, {useEffect, useState, useCallback}  from 'react'
import Item from "../Item/Item";
import Pagination from "../Pagination/Pagination";
import { debounce } from '../../utils';
import "./styles.scss";

const List = ()=> {
    const [data, setData] = useState([]);
    const [pageItems, setPageItems] = useState([]);
    const [order, setOrder] = useState('DESC');
    const [pageCount, setPageCount] = useState(1);
    const [forcePage, setForcePage] = useState(0);
    const itemsPerPage= 12;

    const fetchingData = (url)=>{
        fetch(url)
            .then(res => res.json())
            .then(
              (res) => {
                setPageCount(Math.ceil(res.length / itemsPerPage));
                // const uniqueArr= [...new Map(res.map(item => [item["title"], item])).values()];
                //const sortedArr = res.sort((a,b) => a.title - b.title);
                const result = res.map((item, idx)=>({
                    id: idx,
                    title: item.title,
                    year: item.release_year,
                    director: item.director,
                    actors: item.actor_1+", "+item.actor_2+", "+item.actor_3,
                    locations: item.locations,
                    production: item.production_company,
                    writer: item.writer,
                }));
                const slicedArray = result.slice(0, itemsPerPage);
                setPageItems(slicedArray);
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
        changePreviewInPage(forcePage);
    }

    const debouncedChangeHandler = useCallback(
        debounce(_onChange, 300)
    , []);

    const changePreviewInPage=(page)=>{
        let offset = Math.ceil((page+1) * itemsPerPage);
        const newItems = data.slice(offset-itemsPerPage, offset);
        setPageItems(newItems);
        setForcePage(page);
      }

    const onPageChange = (pageObj)=>{
        window.scrollTo(0, 0);
        let page = pageObj.selected;
        changePreviewInPage(page);
      }

    return (
        <div>
            <label htmlFor='film-title'>Search by film title: </label>
            <input 
                className='filter-input'
                id="film-title"
                name="Search by film title" 
                type="text" 
                onChange={debouncedChangeHandler} 
                placeholder='Enter Film title'
            /> 
            <div className="filter-section">
                <span className='filter-section-label'>Sort film title:</span>
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
            {pageItems.length > 0 && 
                <>
                    <div className='film-wrapper'>
                        { pageItems.map(item=>(
                            <Item key={item.id} item={item} />
                            )
                        )}
                    </div>
                    <Pagination 
                    pageCount={pageCount} 
                    forcePage={forcePage}
                    onPageChange={(selectedPage)=>onPageChange(selectedPage)}
                    />
                </>}
        </div>
    )
}

export default List;