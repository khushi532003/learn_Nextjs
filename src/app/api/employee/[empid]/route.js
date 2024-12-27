import { employee } from "@/db/db";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const empId = params.empid;
    console.log("Employee ID:", empId);

    const empData = employee.filter((item) => item.employeeId == empId);
    const result = empData.length === 0
        ? { result: "No employee found" }
        : { result: empData };
    return NextResponse.json(result);
};

export const DELETE = async (req, { params }) => {
    const empId = params.empid;

    if (empId) {
        return NextResponse.json(
            { result: "Employee Info deleted Successfully", success: true },
            { status: 200 }
        );
    } else {
        return NextResponse.json(
            { result: "Employee Info Not Found", success: false },
            { status: 404 }
        );
    }
};

export const PUT = async (req, { params }) => {
    const payload = await req.json();
    payload.employeeId = params.empid;

    if (!payload.employeeId || !payload.name || !payload.salary || !payload.email) {
        return NextResponse.json({ result: "Error", success: false });
    } else {
        return NextResponse.json({ result: "Success", success: true });
    }
};