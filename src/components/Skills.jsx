import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaGithub, FaGitAlt, FaMobileAlt } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: 'HTML', level: 'Advanced', icon: <FaHtml5 /> },
    { name: 'CSS', level: 'Advanced', icon: <FaCss3Alt /> },
    { name: 'JavaScript', level: 'Advanced', icon: <FaJsSquare /> },
    { name: 'Bootstrap', level: 'Intermediate', icon: <FaBootstrap /> },
    { name: 'React', level: 'Advanced', icon: <FaReact /> },
    { name: 'Node.js', level: 'Intermediate', icon: <FaReact /> },
    { name: 'GitHub', level: 'Intermediate', icon: <FaGithub /> },
    { name: 'Git', level: 'Intermediate', icon: <FaGitAlt /> },
    { name: 'Responsiveness', level: 'Intermediate', icon: <FaMobileAlt /> },
  ]

  return (
    <div className='text-white pt-6 pb-6 items-center text-center' id='skills'>
      <h1 className='text-3xl text-[clamp(1rem,5vw,3rem)] font-bold'>Skills</h1>
      <div className="w-full flex flex-wrap justify-center gap-6">
      {skills.map((skill, idx) => (
        <div key={idx} className="group w-64 h-80 [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front */}
            <div className="absolute inset-0 bg-slate-900 text-white rounded-xl shadow-xl flex flex-col items-center justify-center p-6 [backface-visibility:hidden]">
              <p className="text-4xl text-blue-300 mb-2">{skill.icon}</p>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>

            {/* Back */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-700 text-white rounded-xl shadow-xl flex items-center justify-center p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="text-center">
                <p className="font-medium">{skill.level}</p>
                <p className="text-sm mt-2 opacity-90">Experienced with {skill.name} — click or hover to flip.</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}