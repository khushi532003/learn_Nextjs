// export async function GET(request){
//     return new Response("Hello Khushi")
// }

import { NextResponse } from "next/server"

export const GET = (request) =>{
    return NextResponse.json({
        name : "Khushi",
        age : "21",
        department : "Frontend"
    })
}