'use client';
import React from 'react'
import Image from 'next/image'
import bot from "../../public/chatgpt.webp"
import { useUser } from '@clerk/nextjs'

const DisplayChat = ({ message, reply }) => {
  const { user } = useUser()
  return (
    <div className='flex flex-col w-full'>
      <div className='flex gap-4 bg-[#f1f1f1] p-5'>
        <img className='rounded-full h-[35px] w-[35px] shadow-sm object-cover' src={user?.profileImageUrl} alt={user?.fullName} />
        <p>{message}</p>
      </div>
      <div className='flex gap-4 text-gray-700 py-10 px-5'>
        <Image className='rounded-full h-[35px] w-[35px] shadow-sm' src={bot} alt='bot' />
        <p>{reply}</p>
      </div>
    </div>
  )
}

export default DisplayChat