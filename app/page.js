import Image from "next/image";


export default function Home() {
  return (
   <main className="">
    <section className="grid grid-cols-2  ">
    <div className=" 
 first  border border-black h-[69.5vh] text-center flex flex-col justify-center items-center ">
    <h1 className="text-2xl mb-2">  Hi, I’m Shyam Mohan Faujdaar  </h1>
    <p className=" text-base leading-relaxed text-justify max-w-xl">
A passionate web developer building clean, modern, and responsive websites.I’m passionate about creating meaningful digital experiences that blend creativity with functionality. With a strong foundation in web development and a drive to keep learning, I aim to build solutions that are not only visually appealing but also solve real-world problems.  
</p>
<div>

</div>
</div>
    <div className="second text-6xl border border-black h-[69vh] ">
      <img className="" src="/laptop.jpg" alt=""  />
    </div>
</section>

<div className="h-[30vh] text-blue-500 text-center flex flex-col justify-center items-center">
  For better experience click on my navbar links
</div>
   </main>
  );
}
