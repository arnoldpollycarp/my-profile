import React, { useState } from 'react'
import {
  FaNodeJs,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaPython
} from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiElixir } from "react-icons/si";

export default function Skills() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const skills = [
    { name: 'Node.js', level: 'Advanced', icon: <FaNodeJs /> },
    { name: 'React', level: 'Advanced', icon: <FaReact /> },
    { name: 'Elixir (Phoenix)', level: 'Advanced', icon: <SiElixir /> },
    { name: 'Python (Flask/Django)', level: 'Intermediate', icon: <FaPython /> }, 
    { name: 'JavaScript', level: 'Advanced', icon: <FaJsSquare /> },
    { name: 'Tailwind CSS', level: 'Advanced', icon: <RiTailwindCssFill /> },
    { name: 'GitHub', level: 'Advanced', icon: <FaGithub /> },
  ]

  // Pagination logic
  const lastIndex = currentPage * itemsPerPage
  const firstIndex = lastIndex - itemsPerPage
  const currentItems = skills.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(skills.length / itemsPerPage)

  return (
    <div className="text-white pt-6 pb-10 text-center" id="skills">
      <h1 className="text-[clamp(1rem,5vw,3rem)] font-bold">Skills</h1>

      {/* SKILLS GRID */}
      <div className="mt-8 grid gap-8 px-4 max-w-6xl mx-auto
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {currentItems.map((skill, idx) => (
          <div key={idx} className="group w-full h-80 [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700
                            [transform-style:preserve-3d]
                            group-hover:[transform:rotateY(180deg)]">

              {/* Front */}
              <div className="absolute inset-0 bg-slate-900 rounded-xl shadow-xl
                              flex flex-col items-center justify-center
                              [backface-visibility:hidden]">
                <div className="text-4xl text-blue-400 mb-3">
                  {skill.icon}
                </div>
                <p className="text-lg font-semibold">{skill.name}</p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-700
                              rounded-xl shadow-xl flex items-center justify-center
                              [backface-visibility:hidden]
                              [transform:rotateY(180deg)]">
                <div className="text-center px-4">
                  <p className="text-lg font-medium">{skill.level}</p>
                  <p className="text-sm mt-2 opacity-90">
                    Experienced with {skill.name}
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-3 mt-8">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-md border transition
              ${
                currentPage === i + 1
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'text-gray-400 border-gray-500 hover:bg-gray-700'
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
