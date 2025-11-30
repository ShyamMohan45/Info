import React from 'react'
import { Dancing_Script } from 'next/font/google';
const dancing = Dancing_Script({
  weight: ['400', '700'], // choose weights you want
  subsets: ['latin'],
});


const skill = () => {
  return (
    // <div
    //   className="h-screen bg-cover bg-center"
    //   style={{ backgroundImage: "url('/skills-bg.jpg')" }}
    // >
    //   {/* Page content */}
    // </div>
    <div className='h-screen bg-cover bg-center' style={{backgroundImage: "url('/skills.jpg')"}}>

<div className="container1 ">

  <h1 className={`text-white text-7xl text-center py-5 ${dancing.className}`} >My Skills</h1>

  <p className={`text-white text-2xl text-justify  ${dancing.className}`}>
    I specialize in building modern, responsive, and high-performance web applications using technologies like React, Next.js, Tailwind CSS, and MongoDB. My skills cover the full development process — from designing clean, user-friendly interfaces to implementing secure backend functionality. I enjoy turning ideas into reality through efficient code, smooth animations, and intuitive user experiences. Constantly learning and adapting, I keep up with the latest tools and best practices to deliver solutions that are both functional and visually appealing.
  </p>
</div>
<div className='flex justify-around items-center'>
<div className="container2 rounded-lg w-70 h-80 rotate-on-hover ">
 <a className={`text-3xl text-white cursor-pointer text-center mx-22 py-5 ${dancing.className}`} href="https://react.dev/ ">React</a>
 <p className="text-lg leading-relaxed text-gray-300">
  Hi, I'm <span className="text-blue-400 font-semibold">Shyam Mohan Faujdaar</span>, 
  a passionate web developer with skills in <span className="text-green-400">React</span>, 
  <span className="text-green-400">Next.js</span>, <span className="text-green-400">Tailwind CSS</span>, 
  and <span className="text-green-400">MongoDB</span>. I love building clean, responsive, and user-friendly 
  websites that combine beautiful design with powerful functionality.
</p>

</div>

<div className="container3  rounded-lg w-70 h-80 rotate-on-hover">
 <a className={`text-3xl text-white cursor-pointer text-center mx-22 py-5 ${dancing.className}`} href="https://nextjs.org/ ">Next.js</a>
 <p className="text-lg leading-relaxed text-gray-300">
  I have hands-on experience with <span className="text-blue-400 font-semibold">Next.js</span>, 
  a powerful React framework for building fast, SEO-friendly, and scalable web applications. 
  My expertise includes creating dynamic pages with the App Router, integrating APIs, 
  optimizing performance through SRR and SSG.
</p>

</div>

<div className="container4 rounded-lg w-70 h-80 rotate-on-hover">
  <a
    className={`text-3xl text-white cursor-pointer text-center mx-18 py-5 ${dancing.className}`}
    href="https://www.mongodb.com/"
  >
    MongoDB
  </a>
  <p className="text-lg leading-relaxed text-gray-300">
    I have practical experience with <span className="text-green-400 font-semibold">MongoDB</span>,  
    I am skilled in designing efficient database schemas, performing CRUD operations, 
    and integrating MongoDB with backend technologies like <span className="text-blue-400">Node.js</span> 
    and <span className="text-blue-400">Next.js API routes</span>. 
  </p>
</div>

</div>
    </div>
  )
}

export default skill
