"use client";

import React, { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = await fetch("http://localhost:3000/api/users" , { method : "POST" , body : JSON.stringify({name , age})})
        data = await data.json();
        console.log(data);
        setName("")
        setAge("")
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="age"
                        >
                            Age
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            value={age}
                            onChange={(e)=> setAge(e.target.value)}
                            type="text"
                            id="age"
                            name="age"
                            placeholder="21"
                        />
                    </div>
                    <button
                        className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
