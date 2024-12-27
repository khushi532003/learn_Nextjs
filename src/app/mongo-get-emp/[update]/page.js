"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UpdateEmployee = () => {
    const params = useParams(); // Directly call `useParams()` to get the params object
    const router  = useRouter()
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [department, setDepartment] = useState("");

    const id = params.update; // Access the `update` parameter from params

    useEffect(() => {
        const empDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/db-emp/${id}`);
                const data = await response.json();
                console.log(data);
                
                if (data && data.result) {
                    setName(data.result.name);
                    setSalary(data.result.salary);
                    setDepartment(data.result.department);
                }
            } catch (error) {
                console.error("Failed to fetch employee details:", error);
            }
        };
        if (id) {
            empDetails();
        }
    }, [id]);

    const handleRecord = async ()=>{
        let data = await fetch(`http://localhost:3000/api/db-emp/${id}`, {method : "PUT" , body : JSON.stringify({name, salary, department})})
        data = await data.json()

        if(data.result){
            alert("Record updated successfully")    
            router.push("/mongo-get-emp")
        }else{
            alert("try again")
            router.push("/mongo-get-emp")
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-2xl font-bold">Update Employee | Mongo DB with PUT API in Next JS</h2>
                <input
                    type="text"
                    className="px-3 py-2 border-2 border-black"
                    placeholder="Enter employee Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <input
                    type="text"
                    className="px-3 py-2 border-2 border-black"
                    placeholder="Enter employee Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
                <br />
                <br />
                <input
                    type="text"
                    className="px-3 py-2 border-2 border-black"
                    placeholder="Enter employee Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
                <br />
                <br />
                <button onClick={handleRecord} className="px-8 py-1 bg-blue-600 text-white rounded">
                    Update Employee
                </button>
            </div>
        </>
    );
};

export default UpdateEmployee;
