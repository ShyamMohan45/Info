import React from 'react'
import { Dancing_Script } from 'next/font/google';
const dancing = Dancing_Script({
  weight: ['400', '700'], // choose weights you want
  subsets: ['latin'],
});
function personal() {
  return (
    <div className='h-[88vh] bg-cover bg-center flex flex-col justify-center items-center' style={{backgroundImage:"url('/info.jpg')"}}>
      <div className={`start text-5xl text-center text-white ${dancing.className} ` }>
        Hey everyone, this is Shyam👋 from Indian Institute of Information technology , Kota
      </div>
      <div className={`text-center text-3xl py-3 text-white ${dancing.className} `}>I am mern stack web developer</div>
    </div>
  )
}
export default personal
