"use client"

import { useRouter } from "next/navigation"

const Delete = ({ id }) => {

    const router = useRouter()
    const deleteInfo = async ()=>{
        let data = await fetch(`http://localhost:3000/api/db-emp/${id}`, {method : "DELETE"})
        data = await data.json();

        if(data.success){
            alert("Data deleted successfully")
            router.push("/mongo-get-emp")
        }else{
            alert("try again")
            router.push("/mongo-get-emp")
        }
    }
  return (
    <>
          <div onClick={deleteInfo} className='cursor-pointer px-4 bg-red-700 text-white'>Delete</div>
    </>
  )
}

export default Delete