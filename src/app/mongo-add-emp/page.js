"use client";

import { useState } from "react";

const AddEmployee = () => {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [department, setDepartment] = useState("");

    console.log("Component rendered");

    const handleAddEmp = async () => {
        let data = await fetch("http://localhost:3000/api/db-emp" , {method : "POST" , body : JSON.stringify({name, salary, department})})
        data = await data.json();

        if(data.success){
            alert("Employee added successfully")
            setName("")
            setSalary("")
            setDepartment("")
        }else{
            alert("Try Again")
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-2xl font-bold">Add Employee | Mongo DB with POST API in Next JS</h2>
                <input
                    type="text"
                    className="px-3 py-2 border-2 border-black"
                    placeholder="Enter employee Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <br />
                <br />
                <input
                    type="text"
                    className="px-3 py-2 border-2 border-black"
                    placeholder="Enter employee Salary"
                    value={salary}
                    onChange={(e) => {
                        setSalary(e.target.value);
                    }}
                />
                <br />
                <br />
                <input
                    type="text"
                    className="px-3 py-2 border-2 border-black"
                    placeholder="Enter employee Department"
                    value={department}
                    onChange={(e) => {
                        setDepartment(e.target.value);
                    }}
                />
                <br />
                <br />
                <button
                    onClick={handleAddEmp}
                    className="px-8 py-1 bg-blue-600 text-white rounded"
                >
                    Add Employee
                </button>
            </div>
        </>
    );
};

export default AddEmployee;