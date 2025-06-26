import React from 'react'

export default function About() {
  return (
    <div id="about" className="text-black p-10">
       <div className="max-w-6xl">
        <p className='text-5xl md:text-4xl font-extrabold'>About Me</p>
        <p className='flex flex-col gap-4'>
        <span>I am a full-stack developer passionate about building scalable, high-performance web applications that seamlessly blend design and engineering. With expertise in front-end development, accessibility, and backend architecture, I create intuitive, inclusive, and efficient digital experiences.</span>  
        <span>Previously, I worked as an Engineer at Adept Technologies Limited, where I developed and maintained robust UI components and backend systems that power the platform. My focus includes web accessibility, API development, performance optimization, and scalable architecture to ensure seamless user interactions.</span>  
        <span>Throughout my career, I’ve worked across enterprise companies, start-ups, and digital product studios, gaining a diverse range of experience in different development environments.</span>  
        <span>Outside of work, I enjoy hiking, reading, spending time with family, and working on the farm.</span> 
        </p>
       </div>     
    </div>
  )
}
