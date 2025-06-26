import {React, useState} from 'react'
import {HiOutlineUsers, HiArrowCircleRight} from 'react-icons/hi'
import thamani from '../assets/thamani.png'
import gs1kenya from '../assets/gs1kenya.png'
import sconnect from '../assets/shambaconnect.png'
import garageImg from '../assets/garage.png'
import quickdrapp from '../assets/quickdrapp.png'
import { button } from 'framer-motion/client'

export default function Projects() {
  // pagenation state 
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 3;

  const projectsList = [
    {
    name: "Thamani Online",
    Description: "Thamni On is a real time supplyin system aimed at curbing the issues on bulk break and payment in the retail space. The system entailed merging manufacturers, wholesalers and retailers ensuring they can easily manage their stock and sales on a real time basis.",
    userNum: "2000",
    languagesUsed: ["Node Js", "React Js", "MongoDB"],
    image: thamani
    },
    {
    name: "GS1 Kenya ERP",
    Description: "GS1 Kenya ERP is a web based application that serves GS1 kenya's staff and customers in barcode management. Additionally, it acts as the organisations internal staff management system.",
    userNum: "3000",
    languagesUsed: ["Elixir (Phoenix)", "MySQL", "HTML5", "CSS3", "Js"],
    image: gs1kenya
    },
    {
    name: "Shamba Connect",
    Description: "Shamba Connect was designed to help the low level farmers in rural Kenya. The idea is to allow the farmer to have access to the larger amrket and all it's benefits eliminating the middleman and their disadvantages.",
    userNum: "500",
    languagesUsed: ["Elixir (Phoenix)", "MySQL", "HTML5", "CSS3", "Js"],
    image: sconnect
    },
    {
    name: "Garage Gem",
    Description: "Garage Gem is an online tool aimed to help garage owners run their paces of busins. It captures Customer activities within the the garage, from making their car issues known to payment.",
    userNum: "100",
    languagesUsed: ["Node Js", "React Js", "MongoDB"],
    image: garageImg
    },
    {
    name: "Quick Drapp",
    Description: "Garage Gem is an online tool aimed to help garage owners run their paces of busins. It captures Customer activities within the the garage, from making their car issues known to payment.",
    userNum: "100",
    languagesUsed: ["Node Js", "React Js", "MongoDB"],
    image: quickdrapp
    },  
  ]

  // slicing projects list items 
  const indexOflastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOflastItem - itemsPerPage;
  const currentItems = projectsList.slice(indexOfFirstItem, indexOflastItem)

  // page number buttons 
  const totalPages = Math.ceil(projectsList.length / itemsPerPage);
  const pageNum = [...Array(totalPages).keys()].map(num => num + 1);
  return (
    <div id = "Projects" class="sm:py-8 sm:px-20 p-4 sm:ml-64 dark:bg-gray-800"> 
      <div class="p-4  dark:border-gray-700">
        <p className='sm:hidden text-white text-2xl font-bold'>Projects</p>
         <ul className='list-none space-y-4'>     
          {currentItems.map(item => (
            <li className='flex sm:flex-row flex-col gap-6 hover:bg-gray-700 p-4 rounded-lg'>
               <div className='text-xs min-w-max text-gray-800'>
                 <img src={item.image} className=" h-62 w-64 rounded-sm" alt="Logo" />
               </div>
               <div>
                 <a href="https:thamanionline.com/" className='font-extrabold flex flex-row gap-x-2 text-white'>{item.name} <HiArrowCircleRight className='pt-1' /></a>
                 <ul className=' list-none'>
                   <li className='text-gray-400'>{item.Description}</li>
                   <li className='flex flex-row gap-x-2'>
                    <HiOutlineUsers /> {item.userNum}+ users  
                   </li>
                   <li className='space-x-3'>
                    {item.languagesUsed.map(lang => (
                      <button class="bg-transparent hover:bg-gray-500 text-gray-400 font-semibold hover:text-white py-1 px-2 border border-gray-400 hover:border-white rounded-full">
                        {lang}
                      </button>
                    ))}                  
                   </li>
                 </ul>
                 </div>
             </li>
          ))}
          <div className="flex space-x-2 mt-4">
            {
              pageNum.map(num => (
                <button
                  key={num}
                  onClick={() => setcurrentPage(num)}
                  className={`px-3 py-1 border rounded text-gray-400 ${currentPage === num ? 'bg-gray-500 text-white' : ""}`}
                >
                  {num}
                </button>
              ))
            }
          </div>             
         </ul>
      </div>
    </div>
  )
}
