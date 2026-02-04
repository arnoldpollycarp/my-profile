import React from 'react'
import Hero_image from '../assests/photo_1.png'
import { FaFacebook, FaGoogle, FaLinkedin, FaGithub, FaInstagram, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from '../assests/a_logo.png'
import cv from '../assests/Arnold_Polycarp_Okello_resume.pdf'

export default function Hero() {
  const socialsList = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/arnold-pollycarp-6b28901ab/', icon: <FaLinkedin />, delay: 900 },
    { name: 'GitHub', href: 'https://github.com/arnoldpollycarp', icon: <FaGithub />, delay: 1000 },
    { name: 'Gmail', href: 'mailto:arnoldpollycarp@gmail.com', icon: <FaGoogle />, delay: 700 },
    { name: 'Facebook', href: 'https://www.facebook.com/clint.milner.733/', icon: <FaFacebook />, delay: 500 },
    { name: 'Instagram', href: 'https://www.instagram.com/arnold_pollycarp/', icon: <FaInstagram />, delay: 600 },
    
  ]

  return (
    <div className="px-6 md:px-16 py-6" id='home'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4">

        {/* name */}
        <div className="text-white font-bold flex flex-col gap-4 justify-center w-full text-center md:text-left">
          <p className="tracking-widest" data-aos="fade-up">
            Hello, my name is
          </p>
          <div class = "flex flex-row space-x-2 text-2xl text-[clamp(1.5rem,6vw,3rem)] tracking-widest" data-aos="fade-right"
            data-aos-delay="500">
              <img src={logo} className="h-10 rounded-md" alt="Logo" />
                <span class="self-center font-semibold whitespace-nowrap dark:text-white">RNOLD</span>
                <span class="self-center font-semibold whitespace-nowrap dark:text-white">P.</span>
                <span className="text-blue-300">OKELLO</span>                  
            </div>

          <p className="tracking-widest text-lg md:text-xl">
            I'm a <span className="text-blue-300">Software Developer/Engineer</span>
          </p>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-4 text-2xl text-blue-300 flex-wrap">
            {socialsList.map((social, index) => (
              <a
                href={social.href}
                key={index}
                data-aos="fade-down"
                data-aos-delay={social.delay}
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <button
            className="border-2 border-white py-2 rounded-full w-[200px] mx-auto md:mx-0 hover:text-black hover:bg-white transition"
            data-aos="zoom-in"
          >
            <a href={cv} download className="flex items-center justify-center">
              <FaDownload className="mr-2" /> Download CV
            </a>
          </button>
        </div>

        {/* image */}
        <div
          className="relative flex items-center justify-center w-full h-80 md:h-96 bg-transparent overflow-hidden rounded-2xl animate-fadeIn"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          {/* Glowing background blob */}
          <div className="absolute w-60 h-60 md:w-72 md:h-72 bg-cyan-400 rounded-[40%_60%_60%_40%/40%_60%_40%_60%] blur-md opacity-70" />

          {/* main image */}
          <motion.img
            src={Hero_image}
            alt="Profile"
            className="relative z-10 w-48 md:w-60 h-auto object-cover"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </div>
  )
}
