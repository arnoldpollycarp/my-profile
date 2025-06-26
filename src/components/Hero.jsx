import React from 'react'
import { motion } from "framer-motion";
import photo_1 from '../assets/photo_3.jpg'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagramSquare } from "react-icons/fa";

export default function Hero() {
  return (
    <div id = "About" class="sm:py-8 sm:px-20 p-4 sm:ml-64 dark:bg-gray-800">  
        <div class="p-4  dark:border-gray-700">
        <p className='sm:hidden text-white text-2xl font-bold'>About Me</p>
          <ul class = "text-gray-400 space-y-6">
            <li>I am a <span class = "text-white font-bold">full-stack developer</span> passionate about building scalable, high-performance web applications that seamlessly blend design and engineering. With expertise in front-end development, accessibility, and backend architecture, I create intuitive, inclusive, and efficient digital experiences.</li>  
            <li>Previously, I worked as an Engineer at Adept Technologies Limited, where I developed and maintained robust UI components and backend systems that power the platform. My focus includes web accessibility, API development, performance optimization, and scalable architecture to ensure seamless user interactions.</li>  
            <li>Throughout my career, I’ve worked across <span class = "text-white font-bold">enterprise companies</span>, <span class = "text-white font-bold">start-ups </span>, and <span class = "text-white font-bold">digital product studios </span>, gaining a diverse range of experience in different development environments.</li>  
            <li>Outside of work, I enjoy hiking, reading, spending time with family, and working on the farm.</li>
          </ul>
        </div>
    </div>
  )
}
