import Link from "next/link";
import Btn from "./btn";

const getEmployess = async () => {
    let data = await fetch("http://localhost:3000/api/employee")
    data = await data.json();
    return data;
}

const EmployeeList = async () => {
const employess = await getEmployess()

    return (
        <>
            <h2>Employees List</h2>

            {
                employess.map((item, i) => (
                    <div key={i} className="flex justify-evenly items-center">
                        <h3>Name : {item.name}</h3>
                        <Btn id={item.employeeId} />
                        <Link href={`employeeList/${item.employeeId}/update`}>Edit</Link>
                    </div>
                ))
            }
        </>
    )
}

export default EmployeeList;