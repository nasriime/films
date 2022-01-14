import React, {useEffect, useContext}  from 'react'
import {MainContext} from '../../contexts';

const List = ()=> {
    const { setData } = useContext(MainContext);

    useEffect(() => {
        const url = "https://data.sfgov.org/resource/yitu-d5am.json";
        fetch(url)
            .then(res => res.json())
            .then(
              (res) => {
                console.log("res", res)
              },
              (err) => {
                  console.log('err', err)
              }
            )
    }, [])

    return (
        <div>
            List
        </div>
    )
}

export default List;