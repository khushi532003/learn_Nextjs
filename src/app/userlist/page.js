"use client"
import React, { useEffect, useState } from 'react'

const Users = () => {

    const [ users, setUsers ] = useState([])

    useEffect(()=>{
        async function getUsers (){
            const usersData = await fetch("https://jsonplaceholder.typicode.com/users")
            setUsers(await usersData.json())
        }
        getUsers()
    }, [])

    console.log(users);
    
  return (
    <>
    <h2>User List |  Fetach Data With API </h2>
    {
        users.map((user)=> {
        <li key={user.id}>{user.username}</li>})
    }
    </>
  )
}

export default Users;

// export function generateMetadata() {
//   return {
//     title: "User List"
//   }
// }