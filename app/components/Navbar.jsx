"use client"
import { useState } from "react";
import { useEffect } from "react";
import React from 'react'
import Link from 'next/link'
function Navbar() {
const [showwelcome, setshowwelcome] = useState(true)
  useEffect(() => {
    
  const e = setTimeout(() => {
    setshowwelcome(false)
  }, 2000);
    return () => {
      clearTimeout(e)
    }
  }, [])


  return (<>
    <main>
      {showwelcome && (<div className="flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 fixed inset-0 animated-slideUp text-white ">
<h1 className="text-4xl font-bold">Welcome to Shyam Mohan Faujdaar Website 👋</h1>
<p className="text-2xl ">Thanks for visiting my website</p>
</div>)}
<style jsx>
{`
.animated-slideUp{
animation: slideUp 4s ;
}
@keyframes slideUp{
0%{
transform:translateY(0)
}
80%{
transform:translateY(-100%)}
100% {
        display: none;
           }
}


`}
</style>
    </main>
    <nav className='flex space-x-4  justify-around items-center py-5 bg-black text-white   '>
        <div className="text-5xl">
         <Link href={"/"}> My info </Link>
            </div>
  <ul className='flex  justify-around items-center space-x-10'>
    <Link href={"/"}><li>Home</li></Link>
    <Link href={"/about"}><li>About me</li></Link>
    <Link href={"/skills"}><li>Skills</li></Link>
    <Link href={"/personal"}><li>Personal info</li></Link>
    <Link href={"/projects"}><li>Projects</li></Link>
    <div className='flex gap-2 '> 
<button onClick={() => 
window.open('https://github.com/ShyamMohan45','_blank')
} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
</svg>
Sign in with Github
</button>

<button onClick={()=> window.open('http://google.com','_blank')} type="button" className="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
</svg>
Sign in with Google
</button>
</div>
  </ul>

  

    </nav>
    </>
  )
}

export default Navbar
