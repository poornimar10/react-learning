import React, { useState,useEffect } from 'react';

function Datafetching(){
    const[error,setError]=useState(null);
    const[users,setUsers]=useState([]);
    const[isLoaded,setLoading]=useState(false);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res =>
            res.json())
        .then(result=>{
            setUsers(result);
            setLoading(true);
        },(error)=>{
            setError(error);
            setLoading(true);
        })
    },[])
           if(error){
           return <div>Error:{error.message}</div>
           }
           if(!isLoaded)
            {
                return(<div>Loading.....</div>)
            }
            else
            {
            return(
                <div className="data-fetching">
                    <ul>
                        {users.map(user=>(
                            <li key={user.id}>
                                {user.name} | {user.username} | {user.email} 
                            </li>
                        ))}   
                    </ul>
                 </div>
            )
        }

        
}
export default Datafetching;