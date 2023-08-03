'use client'
import { UserButton } from '@clerk/nextjs';
import React from 'react';

const Navbar = () => {

  return (
    <header className='sticky top-0 flex justify-between items-center px-5 md:px-10 py-4 w-full'>
      <h1 className='text-2xl font-bold'>Quick Chat</h1>
      <div className='flex gap-5 items-center'>
        <button onClick={() => {
          localStorage.removeItem("api");
          window.location.reload(false)
        }}
          className=' bg-indigo-500 text-white rounded-md px-2 py-2 text-sm'>
          Revoke Key
        </button>
        <UserButton />
      </div>
    </header>
  );
};

export default Navbar;
