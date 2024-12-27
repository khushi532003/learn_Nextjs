'use client'

import { useState } from "react"

const UploadMongoImage = () => {

    const [file, setFile] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!file){
            alert("Please select a file")
            return
        }

        const data = new FormData();
        data.append('file', file)

        try {
            let result = await fetch("/api/upload-mongo-image", {method : "POST", body : data})
            result = await result.json();

            if(result.success){
                alert("File uploaded successfully")
            }else{
                alert("File uploaded failed")
            }
        } catch (error) {
           console.log(error);
           
        }
    }
  return (
    <>

    <form onSubmit={handleSubmit}>
              <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} /> <br /> <br />
              <button type="submit">Upload</button>
    </form>
    </>
  )
}

export default UploadMongoImage