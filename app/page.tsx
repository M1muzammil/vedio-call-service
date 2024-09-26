"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./style.css"
export default function Home() {
 
  const router = useRouter()
  const [value ,setValue] = useState('')


  const pushFunc = ()=>{
   router.push(value) 
  }
  return (
<div className="main">
<h1>
    vedio call app
    </h1>
   <div>
   <input type="room name " placeholder="create a room " onChange={(e) => setValue(e.target.value)} /> 
    <button onClick={pushFunc}>
      create room 
    </button>
   </div>
 
</div>
  );
}
