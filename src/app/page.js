"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
import Img from "../../public/next.svg"
import { Poppins } from "next/font/google"
import Link from 'next/link'

const pop = Poppins({
  weight : "800",
  subsets : ["latin"],
  display : "swap"
})
const page = () => {

  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { task, desc }])
    setTask("")
    setDesc("")
    console.log(mainTask);
  }

  let renderTask = <h2>No task added yet</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((tsk, i) => {
      console.log(tsk);
      return <div key={i}>
        <ul className='py-3'>
          <li>Task : {tsk.task}</li>
          <li>Desc : {tsk.desc}</li>
        </ul>
        <hr />
      </div>
    })
  } else {
    <h4>No Task Available</h4>
  }

  return (
    <div className='p-5'>
      <div className='text-center bg-zinc-800 m-5 text-white p-5 text-3xl font-bold'>TODO LIST</div>
      <div className='px-5'>
      <Link className='px-5 py-2 bg-blue-900 text-white' href="/mongo-add-emp">Add Employee</Link> <br /><br />
      <Link className='px-5 py-2 bg-blue-900 text-white' href="/mongo-get-emp">Get Employee</Link>
      </div>

      {/* <h3 className={pop.className}>Hello Khushi</h3>

      <Image src={Img} alt='Next Logo' height={400} width={200} />
      <form onSubmit={handleSubmit} >
        <div className='flex gap-10'>
          <input type="text" placeholder='Enter Task' className="form-check-input border-black px-4 py-2 border-4 " value={task} onChange={(e) => setTask(e.target.value)} name="" id="" required />
          <input type="text" placeholder='Enter Description' value={desc} className="form-check-input border-black px-4 py-2 border-4" onChange={(e) => setDesc(e.target.value)} name="" id="" required />
          <button type='submit' className='bg-black text-white px-6 py-2 rounded'>Add Task</button>
        </div>
      </form>

      <div className='my-5 bg-zinc-600 text-white p-5'>
        {renderTask}
      </div> */}
    </div>
  )
}

export default page;