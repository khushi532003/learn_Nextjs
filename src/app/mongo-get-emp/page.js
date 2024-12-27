import Link from 'next/link'
import React from 'react'
import Delete from '../Components/Delete';

const getData = async () => {
    let data = await fetch("http://localhost:3000/api/db-emp", { cache: 'no-store' })
    data = await data.json();
    console.log(data);

    if (data?.success) {
        return data?.result
    } else {
        return false
    }
}

const getEmp = async () => {

    const emp = await getData()

    return (
        <>
            <h2 className='text-2xl font-bold py-4 font-sans '>Get Employee's Data from Mongo DB</h2>
            <table border={2} className='w-[50%]'>
                <thead className='bg-blue-950 text-white'>
                    <tr >
                        <th className='text-start'>Name</th>
                        <th className='text-start'>Salary</th>
                        <th className='text-start'>Department</th>
                        <th className='text-start'>Edit</th>
                        <th className='text-start'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emp?.map((item, i) => (
                            <tr key={i} className='border-b-2 border-black'>
                                <td>{item.name}</td>
                                <td>{item.salary}</td>
                                <td>{item.department}</td>
                                <td><Link className='px-4 bg-blue-700 text-white' href={`mongo-get-emp/${item._id}`}>Edit</Link></td>
                                <td><Delete id={item._id} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <br /> <br />
            <Link className='px-5 py-2 bg-blue-950 text-white' href="/">Back to home</Link>
        </>
    )
}

export default getEmp;