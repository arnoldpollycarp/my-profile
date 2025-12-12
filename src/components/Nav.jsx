import React, { useState } from 'react'
import { li } from 'framer-motion/client'
import { Link } from "react-scroll";


export default function Nav() {
  const [open, setOpen] = useState(false)

  const navMenuList = [
    { name: 'Home', delay: 200, id: "home" },
    { name: 'About Me', delay: 400, id: "about" },
    { name: 'Projects', delay: 600, id: "projects" },
    { name: 'Skills', delay: 800, id: "skills" },
    { name: 'Contact', delay: 1000, id: "contact" },
  ]

  return (
    <div className="px-6 md:px-16 py-6">
      <nav className="flex justify-between items-center text-white">

        {/* Logo */}
        <h1 data-aos="zoom-in" className="text-xl font-bold">
          Faith Waigi
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg font-semibold">
          {navMenuList.map((item) => (
            <Link
            key={item.name}
            to={item.id}
            smooth={true}
            duration={600}
            offset={-0}   
            className="hover:text-[#1996ad] cursor-pointer"
          >
            {item.name}
          </Link>
          ))}
        </ul>

        {/* Contact Button (Desktop Only) */}
        <button
          className="hidden md:block border-2 border-white px-4 py-2 rounded-full"
          data-aos="zoom-in"
        >
          Contact Me
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div
          className="mt-4 flex flex-col bg-[#0b0b0b]/80 backdrop-blur-md rounded-lg p-4 md:hidden"
          data-aos="fade-down"
        >
          {navMenuList.map((item) => (
             <Link
            key={item.name}
            to={item.id}
            smooth={true}
            duration={600}
            offset={-0}   
            className="py-2 border-b border-gray-700 text-white font-medium hover:text-[#1996ad] cursor-pointer"
          >
            {item.name}
          </Link>
            
          ))}

          <button className="mt-4 border-2 border-white px-4 py-2 rounded-full w-full">
            Contact Me
          </button>
        </div>
      )}
    </div>
  )
}
