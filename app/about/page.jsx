"use client"
import React from 'react'
import { useState } from 'react'
function about() {
  const [formData, setformData] = useState({name:'',email:'',phone:'',address:''})
const handleChange = (e) => {
  setformData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData) // formData contains { name, email, phone, address }
  });

  const result = await res.json();
  alert(result.message); // Shows success or error
};

  return (
       <div className='h-[88vh] bg-cover bg-center ' style={{backgroundImage:"url('/about.jpg')"}}>

<div className="j text-center py-5 text-3xl ">
    About me
</div>
<div className="flex flex-row gap-20 justify-around items-center py-4">
<div className="p w-[18vw] h-[45vh] flex flex-col rounded-lg  px-5  text-white">
  <h1 className='text-3xl text-center  py-4'>My Journey</h1>
<p className='text-base leading-relaxed text-justify max-w-xl  '>
  I'm a passionate developer with a love for creating digital experiences that inspire and engage.
I always want to learn something new and I am trying to scored 8 CGPA.
</p>

   </div>
<div className="p w-[18vw] h-[45vh] rounded-lg border border-purple-400   ">

<h1 className='text-3xl text-center  py-4 text-white'>My Info</h1>
<form   action="">
<div className='flex flex-col items-center justify-center gap-y-5'>
  
 <input name='name' value={formData.name} onChange={handleChange} className='h-7 w-60 border border-purple-400 rounded-lg px-4 text-white ' type="text" placeholder='enter your name' />
  <input name='email' value={formData.email} onChange={handleChange} className='h-7 w-60 border border-purple-400 rounded-lg px-4 text-white' type="email" placeholder='enter your email' />
 <input name='phone' value={formData.phone} onChange={handleChange} className='h-7 w-60 border border-purple-400 rounded-lg px-4 text-white 'type="tel" id="phone" class="h-7 w-60 border border-purple-400  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />

 <input name='address' value={formData.address} onChange={handleChange} className='h-7 w-60 border border-purple-400 rounded-lg px-4 text-white' type="text" placeholder='enter your address' />
<button onClick={handleSubmit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>



</div>

</form>





</div>
<div className="p w-[18vw] h-[45vh] rounded-lg  ">
</div>
</div>


    </div>
  )
}

export default about

