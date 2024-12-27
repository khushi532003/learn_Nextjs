import { NextResponse } from "next/server"

export const GET = async(req, res) =>{
    // console.log(res.params.all);
    const values = res.params.all
    return NextResponse.json({result : values})
}