'use client'
import DisplayChat from "@/components/DisplayChat";
import Form from "@/components/Form";
import { useEffect, useState } from "react";

export default function Home() {
  const [chats, setChats] = useState([])

  useEffect(()=>{
    const fetchChat = async () => {
      const response = await fetch("/api/chat")
      const data = await response.json()
      if(response.ok){
        console.log(data);
        setChats(data.chat)
      }
    } 
    fetchChat()
  }, [chats])

  return (
    <div className="mx-auto p-5 md:p-10 max-w-[1000px] w-full overflow-hidden">
      <Form />
      <div className="mt-5 md:mt-10 flex flex-col-reverse w-full max-h-[700px] h-full overflow-y-auto border border-gray-200 rounded-lg">
      {chats && chats.map(chat=>
        <DisplayChat key={chat._id} message={chat.message} reply={chat.reply}/>  
        )}
      </div>
    </div>
  )
}
