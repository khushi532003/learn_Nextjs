import { connectionString } from "@/lib/database/db_connection";
import { Employee } from "@/lib/database/model/employee";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PUT =  async (req, value) =>{
    const empID = value.params.empid
    const id = {_id:empID}
    console.log(id);

    const payload = await req.json();
    console.log(payload);

    await mongoose.connect(connectionString)

    const result = await Employee.findOneAndUpdate(id, payload)
    

    return NextResponse.json({result})    
}

export const GET = async (req, value) => {
    const empID = value.params.empid
    const id = { _id: empID }
    console.log(id);

    await mongoose.connect(connectionString)

    const result = await Employee.findById(id)


    return NextResponse.json({ result })
}


export const DELETE =async ( req, value)=>{
    const empID = value.params.empid
    const id = { _id: empID }
    console.log(id);

    await mongoose.connect(connectionString);

    const result = await Employee.deleteOne(id);
    return NextResponse.json({ result, success: true })
}