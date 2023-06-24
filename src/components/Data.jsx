import React, {useEffect, useState} from "react";
import classes from './Data.module.css'


const Data = ()=>{
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(data => setData(data));
    }, []);


    const [filter, setFilter] = useState('');

    return (
        <div className={classes.wrapper}>
            <input value={filter} onChange={e => setFilter(e.target.value)} />
            {data
                .filter(item => item.title.includes(filter))
                .map(item => (
                    <div key={item.id} className={classes.text}>
                        <h2>{item.userId}</h2>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                ))}
        </div>
    );
}
export default Data

