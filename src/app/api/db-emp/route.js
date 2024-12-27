import { connectionString } from "@/lib/database/db_connection"
import { Employee } from "@/lib/database/model/employee"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const GET =  async () =>{
    try {
        const abc=await mongoose.connect(connectionString)
        console.log(abc.ConnectionStates);
        
        const empData = await Employee.find();
        console.log(empData);
            
        // return NextResponse.json({result : "Success"})
        return NextResponse.json({result : empData, success : true})
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({result : "Error"})
        
    }
}

export const POST = async (req) =>{
    const payload = await req.json()
    console.log(payload);
    
    await mongoose.connect(connectionString);

    // const employeeData = new Employee({
    //     name : "Harsh",
    //     salary : "80k",
    //     department : "Business"
    // })
    const employeeData = new Employee(payload)
    const response = await employeeData.save();
    return NextResponse.json({result : response, success : true})
}