import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";

export async function GET(req:Request) {
    const remaining=await limiter.removeTokens(1);
    const origin =req.headers.get('origin');
    console.log("remaining:",remaining);
    if(remaining<0)return NextResponse.json(null,{status:429,statusText:"Too Many Requests",headers:{
        'Access-Control-Allow-Origin':origin||"*",
        'Content-Type':'text/plain',
    }});

    return NextResponse.json("Hello, Next.js!")
}

