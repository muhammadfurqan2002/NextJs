import { NextResponse } from "next/server";

// middleware use here
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";


type Props={
  params:{
    id:string
  }
}

export async function GET(req:Request,{params:{id}}:Props) {
    // const id=req.url.slice(req.url.lastIndexOf('/')+1)
    
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
  const todoData: ToDo = await res.json();

  if(!todoData.id)return NextResponse.json({"message":"id not found"})

  return NextResponse.json(todoData);
}
