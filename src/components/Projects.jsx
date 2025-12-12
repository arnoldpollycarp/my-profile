import React from 'react'
import Hero_image from '../assests/photo_1.png'

export default function Projects() {
  return (
    <div className='text-white pt-6 pb-6 items-center text-center' id='projects'>
      <h1 className='text-3xl text-[clamp(1rem,5vw,3rem)] font-bold'>Projects</h1>
      <div className='flex flex-row flex-wrap justify-center items-center gap-4 mt-4'>
        {/* Project cards go here */}
        <div className='flex flex-col justify-start items-start gap-4 bg-slate-900 p-0 rounded-2xl overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/20 hover:border-blue-400/30 hover:ring-4 hover:ring-blue-400/20'>
          <img src={Hero_image} alt="" className="w-full h-40 object-cover" />
          <div className="p-6 w-full">
            <h1 className="text-left text-lg font-semibold">Project 1</h1>
            <p className='text-gray-400 text-left'>Project 1 Paragraph</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button className='p-2 bg-slate-700 rounded-md'>Skill used</button>
              <button className='p-2 bg-slate-700 rounded-md'>Skill used</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
