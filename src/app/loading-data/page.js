"use client"

import { useEffect, useState } from "react";
import Loader from "./loader";


async function myData(){
    let data = await fetch("https://jsonplaceholder.typicode.com/users")
    data = await data.json()
    return data;
}

const Loading = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true) 
    
    useEffect(() => {
        const fetchData = async () => {
            let fetchUsersData = await myData();
            setUsers(fetchUsersData);
            setLoading(false)
        }
        fetchData()
    }, [])
  return (
    <>

    {loading ? <Loader /> : (users.map((user, i)=>(<h3 key={i}>Name : {user.name}</h3>)))}
    </>
  )
}

export default Loading