import { NextResponse } from "next/server"

export const POST = async (req, res) => {
    let data = await req.json()
    console.log(data);

    if (!data.name || !data.age) {
        return NextResponse.json({ result: "Bad Request" }, { status: 400 })
    }else

    return NextResponse.json({ result: 'Sucess' },{ status: 200 }
    )
}