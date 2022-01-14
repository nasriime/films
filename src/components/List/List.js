import React, {useEffect, useState}  from 'react'
import Item from "../Item/Item";

const List = ()=> {
    const [data, setData] = useState([]);


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

    return (
        <div>
            <input type="text" onChange={(e)=>{_onChange(e)}}/> 
             {data.length > 0 && data.map(item=>(
                <Item key={item.id} item={item} />
                )
             )} 
        </div>
    )
}

export default List;