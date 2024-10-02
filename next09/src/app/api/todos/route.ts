import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET(req:Request) {
  const origin=req.headers.get('origin');
  const res = await fetch(DATA_SOURCE_URL);
  const todoData: ToDo[] = await res.json();

  return new NextResponse(JSON.stringify(todoData),{
    headers:{
      'Access-Control-Allow-Origin':origin||"*",
      "Content-Type":"application/json",
    }
  });
}

const API_KEY:string=process.env.DATA_API_KEY as string


export async function DELETE(request:Request) {
  const {id}:Partial<ToDo>=await request.json();
  if(!id)return NextResponse.json({"message":"Todo id required"})
    await fetch(`${DATA_SOURCE_URL}/${id}`,{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json',
        'API-Key':API_KEY
      }
  })  
  return NextResponse.json({"message":`Todo ${id} deleted`})
}



export async function POST(req:Request) {
    const {userId,title}:Partial<ToDo>=await req.json();
    if(!userId || !title)return NextResponse.json({"message":"missing data required"})

      const res=await fetch(`${DATA_SOURCE_URL}`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          'API-Key':API_KEY
        },
        body:JSON.stringify({userId,title,completed:false})
      })
      const newTodo:ToDo=await res.json();
      return NextResponse.json(newTodo)
}

export async function PUT(req:Request) {
    const {userId,id,title,completed}:ToDo=await req.json();
    if(!userId || !title || !id || typeof(completed)!=='boolean')return NextResponse.json({"message":"missing data required"})

      const res=await fetch(`${DATA_SOURCE_URL}/${id}`,{
        method:"PUT",
        headers:{
          'Content-Type':'application/json',
          'API-Key':API_KEY
        },
        body:JSON.stringify({userId,title,completed})
      })
      const newTodo:ToDo=await res.json();
      return NextResponse.json(newTodo)
}
