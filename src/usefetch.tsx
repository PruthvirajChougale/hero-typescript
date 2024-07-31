import {useEffect, useState} from 'react';

interface fetch<T>{
    data:T | null;
    pending:boolean;
    error:string | null;
}
function Fetchdata<T>(url:any):fetch<T>{
    const [data, setData]=useState<T | null>(null);
    const [pending,setPending]=useState<boolean>(true);
    const [error,setError]=useState<string | null>(null);

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error('Could not fetch the data for that resource')
            }
            else{
                return res.json()
            }
        })
        .then(data=>{
            setPending(false);
            setData(data);
            console.log(data)
            setError(null);
        })
        .catch(err=>{
            setPending(false);
            setError(err.message);
        })
    },[url])

    return (
        {data , pending ,error}
     );
}
 
export default Fetchdata;