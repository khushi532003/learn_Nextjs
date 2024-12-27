"use client"

import { useState } from "react"

const UploadImage = () => {

    const [file, setFile] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!file){
            alert("Please select a file")
            return;            
        }
        const data = new FormData();
        data.append('file', file)

        try {
            let result = await fetch("api/upload-image", {method : "POST", body : data})
            result = await result.json()
            if(result.success){
                alert("Successfully uploaded")
            }else{
                alert("failed")
            }
        } catch (error) {
            console.log(error);
            alert("Failed")

        }
        
    }
    return (
        <>

            <h2 className='text-2xl font-bold'>Upload Image in Next js</h2>

            <form onSubmit={handleSubmit}>
                <input type='file' name='file' onChange={(e)=>setFile(e.target.files?.[0])} /> <br /> <br />
                <button className='px-4 py-1 bg-blue-700 text-white'>Upload</button>
            </form>
        </>
    )
}

export default UploadImage