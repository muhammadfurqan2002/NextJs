'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"



export default function Search() {
    const [search,setSearch]=useState("");
    const router=useRouter();

    const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        router.push(`/${search}/`); //dynamic route
        setSearch('');
    }

    return (
    <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} className="bg-white p-2 w-80 text-xl rounded-xl"/>
        <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold" type="submit">
            🚀
        </button>
    </form>
  )
}
