import React, { useEffect, useState } from 'react';

// Move stats outside the component so it doesn't reinitialize on each render
const stats = [
  { label: 'Years of Experience', target: 5 },
  { label: 'Projects Completed', target: 20 },
  { label: 'Happy Clients', target: 20 },
];

export default function About() {
  const [count, setCount] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // total animation time
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const newCounts = stats.map((stat) => Math.floor(progress * stat.target));
      setCount(newCounts);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []); 

  return (
    <div className='text-white pt-6 pb-6 space-y-4 flex flex-col items-center text-center' id='about'>
      <h1 className='text-3xl text-[clamp(1rem,5vw,3rem)] font-bold'>About Me</h1>

      <p className='mb-3 text-gray-400 max-w-3xl'>
        Backend Engineer with 5+ years of experience building scalable, high-performance applications.
        Specialized in Node.js, MongoDB, MySQL, and API design, with a strong focus on system scalability,
        concurrency handling, and customer-centric solutions. Experienced in remote-first collaboration,
        mentoring teams, and driving business-focused engineering outcomes. Passionate about building
        infrastructure that powers the future of global work.
      </p>

      {/* stat cards */}
      <div className='flex flex-row flex-wrap justify-center items-center gap-4'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 bg-slate-900 p-6 rounded-2xl border border-transparent transform transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/20 hover:border-blue-400/30 hover:ring-4 hover:ring-blue-400/20"
          >
            <p className="text-2xl text-blue-300">{count[index]}+</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
