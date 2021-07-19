import './fontawesome-free-5.15.3-web/css/all.css'
import { useEffect, useState } from 'react'
import userEvent from '@testing-library/user-event';

function Spinner(){
    const [datas , setDatas] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?_delay=500'+Math.random())
            .then(response => response.json())
            .then(result => setDatas(result))
    }, [])


    return(
        <div className="spinner">
            {datas ? 
            <ul className="data">
                {datas.map(data => <li>Comment: {data.name} by {data.email}</li>)}
            </ul> : 

            <i className="fas fa-spinner fa-pulse fa-5x"></i>
            }
             
        </div>
    )
}

export default Spinner