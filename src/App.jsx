import React from 'react'
import { motion } from 'framer-motion'
import { FaBolt, FaBrain, FaEye,  } from 'react-icons/fa';
import { BsChatSquareDots } from 'react-icons/bs';

export default function App() {

  let stats = [
    {
      name: 'reaction',
      score: 80,
      icon: <FaBolt />,
      color: 'rgba(255, 0, 0, 1)',
      bg: 'rgba(255, 0, 0, .05)',
    },
    {
      name: 'memory',
      score: 92,
      icon: <FaBrain />,
      color: 'rgba(255, 210, 0, 1)',
      bg: 'rgba(255, 255, 0, .05)',
    },
    {
      name: 'verbal',
      score: 61,
      icon: <BsChatSquareDots />,
      color: 'rgba(0, 128, 0, 1)',
      bg: 'rgba(0, 128, 0, .05)',
    },
    {
      name: 'Visual',
      score: 72,
      icon: <FaEye />,
      color: 'rgba(0, 0, 255, 1)',
      bg: 'rgba(0, 0, 255, .05)',
    },
  ];

  const listItemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.5}}
  }

  return (
    <motion.div className='grid place-items-center min-h-screen w-full p-5 overflow-hidden'>
      <div className='max-w-xl w-full mx-auto bg-white shadow-2xl shadow-indigo-600/30 rounded-3xl h-fit grid grid-cols-1 md:grid-cols-2 overflow-hidden'>
        {/* left col */}
        <div className='space-y-3 h-full min-h-fit py-6 bg-gradient-to-t from-blue-700 to-indigo-600 flex flex-col items-center justify-evenly text-center rounded-r-3xl px-5'>
          <h1 className='text-xl text-white/50 font-medium'>Your Result</h1>
          <div className='h-32 w-32 rounded-full flex items-center flex-col justify-center bg-gradient-to-t from-transparent to-gray-800/40'>
            <motion.span initial={{ opacity: 0, scale: 0}} animate={{ opacity: 1, scale: 1}} className='font-bold text-white text-3xl md:text-5xl'>72</motion.span>
            <span className='text-white/50'>of 100</span>
          </div>
          <h3 className='text-2xl md:text-3xl text-white'>Great</h3>
          <p className='text-white/50 font-medium'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>  
        {/* right col */}
        <div className='space-y-3 h-full min-h-fit py-6 flex flex-col items-center justify-evenly text-center px-5'>
          <h1 className='text-xl text-gray-700 font-medium'>Summary</h1>
          <ul className='space-y-3 w-full'>
            {stats?.map((s, d) => (
              <motion.li initial={{ opacity: 0, x: -5, scale: .6 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: d * 0.10}} className='w-full flex items-center justify-between gap-2 rounded-xl border border-gray-100/50 py-3 px-4' style={{ backgroundColor: s?.bg}}>
                  <div className='flex items-center gap-2'>
                    <span>{s?.icon}</span>
                    <span className="capitalize font-medium" style={{ color: s?.color}}>{s?.name}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className="font-medium text-gray-600/60">
                      <span className='text-gray-900 font-bold'>{s?.score}</span>
                      / 100
                    </div>
                  </div>
              </motion.li>
            ))}
          </ul>
          <button className='p-3 rounded-full bg-slate-800 text-white text-center font-medium hover:shadow-xl w-full shadow-black/10 duration-300'>Continue</button>
        </div>  
      </div>
    </motion.div>
  )
}
