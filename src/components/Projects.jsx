import React, { useState } from 'react'
import thamani from '../assests/thamani.png'
import gs1 from '../assests/gs1kenya.png'
import shamba from '../assests/shambaconnect.png'
import garage from '../assests/garage.png'
import ku from '../assests/KU_LOGO_2.png'
import skytech from '../assests/TestLogo.svg'
import ScanIT from '../assests/scanIT.png'
import Quick from '../assests/quickdrapp.png'

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const projects = [
    {
      title: 'Thamani Online',
      description:
        'Thamani Online is a real-time supply system aimed at curbing bulk break and payment issues in the retail space.',
      skills: ['Node JS', 'React JS', 'MongoDB'],
      image: thamani,
    },
    {
      title: 'Shamba iko Net',
      description:
        'A web-based platform serving farmers with real-time market prices and weather updates.',
      skills: ['Node JS', 'React JS', 'MongoDB'],
      image: shamba,
    },
    {
      title: 'GS1 Kenya ERP',
      description:
        'Barcode management and internal ERP system for GS1 Kenya.',
      skills: ['Node JS', 'React JS', 'MongoDB'],
      image: gs1,
    },
    {
      title: 'Garage Gem',
      description:
        'Garage management tool capturing customer activity from diagnosis to payment.',
      skills: ['Node JS', 'React JS', 'MongoDB'],
      image: garage,
    },
    {
      title: 'ACES KU',
      description: 'Website for Kenyatta University Engineering School.',
      skills: ['React JS', 'Tailwind CSS'],
      image: ku,
    },
    {
      title: 'Sky Tech',
      description:
        'Platform linking Kenyan remote talent to the US job market.',
      skills: ['Elixir (Phoenix)', 'HTML', 'CSS', 'MySQL'],
      image: skytech,
    },
    {
      title: 'ScanIT',
      description:
        'Low-level barcode generation system for one-off retail usage.',
      skills: ['Elixir (Phoenix)', 'HTML', 'CSS', 'MySQL'],
      image: ScanIT,
    },
    {
      title: 'Quick Drapp',
      description:
        'Web-based system for managing grocery delivery services.',
      skills: ['Elixir (Phoenix)', 'HTML', 'CSS', 'MySQL'],
      image: Quick,
    },
  ]

  // Pagination logic
  const lastIndex = currentPage * itemsPerPage
  const firstIndex = lastIndex - itemsPerPage
  const currentItems = projects.slice(firstIndex, lastIndex)

  const totalPages = Math.ceil(projects.length / itemsPerPage)

  return (
    <div className="text-white pt-6 pb-10 text-center" id="projects">
      <h1 className="text-[clamp(1rem,5vw,3rem)] font-bold">Projects</h1>

      {/* PROJECT GRID */}
      <div className="grid gap-6 mt-6 px-4 max-w-7xl mx-auto
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {currentItems.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl overflow-hidden
                       transform transition-all duration-300
                       hover:-translate-y-2 hover:scale-105
                       hover:shadow-lg hover:shadow-blue-400/20
                       hover:ring-4 hover:ring-blue-400/20"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-6">
              <h2 className="text-left text-lg font-semibold">
                {project.title}
              </h2>

              <p className="text-gray-400 text-left mt-2 text-sm">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full
                               border border-gray-500 text-gray-400
                               hover:bg-gray-600 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION CONTROLS */}
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
