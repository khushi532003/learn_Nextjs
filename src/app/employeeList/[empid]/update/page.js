"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateInfo = () => {
  const { empid } = useParams()

  const [name, setName] = useState("")
  const [salary, setSalary] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    const getEmpInfo = async () => {
      const response = await fetch(`http://localhost:3000/api/employee/${empid}`)
      const data = await response.json();
      if (data?.result?.length > 0) {
        const { name, salary, email } = data.result[0];
        setName(name || "");
        setSalary(salary || "");
        setEmail(email || "");
      } else {
        console.error("No employee found");
      }
    }
    getEmpInfo();
  }, [empid])

  const update = async () => {
    let data = await fetch(`http://localhost:3000/api/employee/${empid}`, { method: "PUT", body: JSON.stringify({ name, salary, email }) })
    data = await data.json();

    if (data.success) {
      alert("Updated Successfully !")
    } else {
      alert("Try again")
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="py-4 text-2xl  font-bold"> Update Employee Info </h2>

        <input type="text" className="px-3 py-2 border-2 border-black" placeholder="Enter employee Name" value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />
        <input type="text" className="px-3 py-2 border-2 border-black" placeholder="Enter employee Salary" value={salary} onChange={(e) => setSalary(e.target.value)} /> <br /><br />
        <input type="email" className="px-3 py-2 border-2 border-black" placeholder="Enter employee Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />

        <button className="px-8 py-1 bg-blue-600 text-white rounded" onClick={update}>Update</button>
      </div>
    </>
  )
}

export default UpdateInfo;  