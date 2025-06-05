"use client";

import { useEffect, useState } from "react";

import { Todo } from "@/types/type";

export default function FetchPage(){
    
    const[todo,setTodo] = useState<null | Todo[]>(null);


    useEffect(()=>{
        async function fetchdata(path:string){
            const options={
                method:"GET",
        
        };

        const res = await fetch(path,options);
        const data = await res.json();
        setTodo(data);
        
        console.log(data);

        
        
    }
    fetchdata('https://d136af9b-0ecb-4bbf-be76-2a3e099a9aa4.mock.pstmn.io/todo')

    }, []);
    
    

    return(
        <div>
            {todo && todo.map((item:Todo)=>{
                return (
                    <div key={item.id}>
                        {item.content}
                    </div>
                )
            })}
        </div>
    )
}