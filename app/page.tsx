"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
 
  const router = useRouter()
  const [value ,setValue] = useState('')


  const pushFunc = ()=>{
   router.push(value) 
  }
  return (
  <h1>
    vedio call app
    <input type="room name " onChange={(e) => setValue(e.target.value)} /> 
    <button onClick={pushFunc}>
      create room 
    </button>
  </h1>
  );
}
