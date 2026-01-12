import React from 'react'
import profil_image from '../assests/Dr_avatar.png'
import { FaGoogle, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Contact() {
  const contactDetails = [
    { type: 'Phone', value: '+254798969098', icon: <FaPhone /> },
    { type: 'Email', value: 'arnoldpollycarp@gmail.com', icon: <FaGoogle /> },
    { type: 'Location', value: 'Nairobi, Kenya', icon: <FaMapMarkerAlt /> },
    { type: 'LinkedIn', value: 'arnold pollycarp', icon: <FaLinkedin /> },
    { type: 'Instagram', value: 'arnold_pollycarp', icon: <FaInstagram /> },
  ]

  return (
    <div className="text-white pt-10 pb-16 text-center" id="contact">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
        {/* Contact Card */}
        <div className="border p-8 rounded-2xl bg-slate-900 shadow-lg
                        w-[320px] sm:w-[360px] md:w-[420px]">
          <h2 className="text-2xl font-semibold mb-6">Faith Waigi</h2>

          <div className="grid gap-4">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border p-4 rounded-xl
                           bg-slate-800 hover:bg-slate-700 transition"
              >
                <span className="text-blue-300 text-xl mt-1 shrink-0">
                  {detail.icon}
                </span>

                <div className="flex flex-col text-left">
                  <p className="text-sm text-gray-400">{detail.type}</p>
                  <p className="text-base break-words">
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <motion.img
          src={profil_image}
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  )
}
