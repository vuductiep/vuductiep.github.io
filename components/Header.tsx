import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {Social} from "@/typings";

type Props = {
    socials: Social[]
}

function Header({socials}: Props) {

  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center hover:brightness-200'>
      <motion.div 
        initial={{x: -300, opacity: 0, scale:0.5}} 
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1}}>
        <div className='flex flex-row items-center'>
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor='gray'
              bgColor='transparent'
              rel="noopener noreferrer" 
              target="_blank"
            />
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        initial={{x: -300, opacity: 0, scale:0.5}} 
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1}}
        className='flex flex-row items-center text-gray-300 cursor-pointer hover:brightness-200'>
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            url='#contact'
          />
          <Link href={'#contact'}>
            <p className='uppercase'>
              Get in touch
            </p>
          </Link>
      </motion.div>
      
      
      
    </header>
  )
}

export default Header