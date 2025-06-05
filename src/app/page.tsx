"use client"
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/Button";

export default function Home() {
  const [count, setCount] = useState<number>(1);



  function plus(){
    setCount(count+1);
  }
  function minus(){
    setCount(count-1);
  }

  return (
    <div>

      {count}
      <Button 
        name = 'plus'
        func={plus}/>
      <Button name='minus' func={minus}/>
      
    </div>
    
  );
}
