import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]}}
      transition={{duration: 1}}
      className='relative flex justify-center items-center'>
      {/*<div className='border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping absolute'/>*/}
      {/*<div className='border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 absolute'/>*/}
      {/*<div className='border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 absolute'/>*/}
      <div className='border border-[#F7AB0A] rounded-full h-[800px] w-[800px] mt-52 opacity-20 absolute animate-pulse'/>
      {/*<div className='border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 absolute'/>*/}
    </motion.div>
  )
}

export default BackgroundCircles
