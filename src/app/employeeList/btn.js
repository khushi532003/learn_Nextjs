"use client"
const btn = ({ id }) => {

    const deleteEmployee = async () => {
        let data = await fetch(`http://localhost:3000/api/employee/${id}`, { method: "DELETE" })
        data = await data.json()
        if (data.success) {
            alert("Employee deleted")
        } else {
            alert("Failed")
        }
    }
    return (
        <>
            <div onClick={deleteEmployee} className='px-5 py-1 cursor-pointer bg-red-500 text-white rounded my-2'>Delete Employee</div>
        </>
    )
}

export default btn;