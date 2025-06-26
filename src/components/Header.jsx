import { React, useState } from 'react'
import logo from '../assets/a_logo.png'
import {HiOutlineArrowNarrowRight, HiOutlinePhone, HiOutlineMail} from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import photo_1 from '../assets/photo_3.jpg'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div>

{/* for small devices  */}
          <div class = "flex flex-col items-start sm:hidden dark:bg-gray-800 w-[90%] p-2 mt-2 ms-3 rounded-md space-y-2">
            <div class = "flex flex-row space-x-2 text-2xl">
              <img src={logo} className="h-8 rounded-md" alt="Logo" />
                <span class="self-center font-semibold whitespace-nowrap dark:text-white">RNOLD</span>
                <span class="self-center font-semibold whitespace-nowrap dark:text-white">P.</span>
                <span class="self-center font-semibold whitespace-nowrap dark:text-white">OKELLO</span>                  
            </div>     
            <div class="text-sm text-white font-bold dark:text-white">Fullstack Web Developer</div>
            <div class = "text-gray-500 text-sm">
              Crafting UI and slaying APIs.
            </div>  
            <div class = "text-gray-500 text-sm">
              <ul class = "inline-flex space-x-4">
                <li><FaGithub /></li>
                <li><FaLinkedin /></li>
                <li><FaFacebookSquare /></li>
                <li><FaInstagramSquare /></li>
              </ul>
            </div>
          </div>

          <aside class="fixed top-0 left-0 z-40 sm:w-80 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full px-3 py-8 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <div class="items-center space-y-2">
                <img class="w-20 h-20 rounded-full" src={photo_1} alt="" />
                  <div class = "flex flex-row space-x-2 text-3xl">
                    <img src={logo} className="h-8 rounded-md" alt="Logo" />
                    <span class="self-center font-semibold whitespace-nowrap dark:text-white">RNOLD</span>
                    <span class="self-center font-semibold whitespace-nowrap dark:text-white">P.</span>
                    <span class="self-center font-semibold whitespace-nowrap dark:text-white">OKELLO</span>                  
                  </div>
                  <div class="text-sm text-white font-bold dark:text-white">Fullstack Web Developer</div>
                  <div class = "text-gray-500">
                    Crafting UI and slaying APIs.
                  </div>
                
                  <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-sm">
                    <li class="flex items-center">
                        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        MERN Stack Developer
                    </li>
                    <li class="flex items-center">
                        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        Elixir (Phoenix) Expert
                    </li>
                    <li class="flex items-center">
                        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        React.Js, Node.Js, REST APIs 
                    </li>
                    <li class="flex items-center">
                        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        MongoDB, MySQL
                    </li>
                    <li class="flex items-center">
                        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        Cloud Computing (AWS)
                    </li>
                  </ul>
                  <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                  </div>
                  <ul class="flex flex-wrap items-start justify-start text-gray-900 dark:text-gray-400 text-sm">
                    <li className = "inline-flex">
                        <HiOutlineMail className='my-1 mx-2'/>arnoldpollycarp@gmail.com
                    </li>
                    <li className = "inline-flex">
                    <HiOutlinePhone className='my-1 mx-2' /> +254798969098
                    </li>
                  </ul>
              </div>
                <ul class="space-y-2 font-medium py-8">
                  <li class = "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition delay-150 duration-300 ease-in-out hover:translate-x-2 hover:scale-120">
                      <HiOutlineArrowNarrowRight />
                      <Link to="About" smooth={true} duration={500} offset={-70} className="cursor-pointer">
                        <span class="ms-3">About</span>
                      </Link>
                  </li>

                  <li class = "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition delay-150 duration-300 ease-in-out hover:translate-x-2 hover:scale-120">
                      <HiOutlineArrowNarrowRight />
                      <Link to="Experience" smooth={true} duration={500} offset={-70} className="cursor-pointer">
                        <span class="ms-3">Experience</span>
                      </Link>
                  </li>

                  <li class = "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition delay-150 duration-300 ease-in-out hover:translate-x-2 hover:scale-120">
                      <HiOutlineArrowNarrowRight />
                      <Link to="Projects" smooth={true} duration={500} offset={-70} className="cursor-pointer">
                        <span class="ms-3">Projects</span>
                      </Link>
                  </li>
                </ul>
                <div class = "py-2 text-gray-500 text-2xl">
                  <ul class = "inline-flex space-x-6">
                    <li class = "transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-120"><FaGithub /></li>
                    <li class = "transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-120"><FaLinkedin /></li>
                    <li class = "transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-120"><FaFacebookSquare /></li>
                    <li class = "transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-120"><FaInstagramSquare /></li>
                  </ul>
                </div>
            </div>
          </aside>
    </div>
  )
}
