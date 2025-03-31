import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'
import Image from 'next/image'

const Experience = () => {
  return (
    <div className="py-20" id='experience'>
      <h1 className='heading'>
        My <span className='text-orange-400'> Work Experience</span>
          </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
         {workExperience.map((card) => (
             <Button
                 key={card.id}
                 borderRadius='1.80rem'
                 className='text-white dark:border-slate-800 border-neutral-200'
                 duration={Math.floor(Math.random() * 1000) + 10000}>
               <div className='flex lg:flex-row lg:items-center flex-col p-3 py-6 md:p-5 lg:p-10 gap-2'>
                 <Image
                    src={card.thumbnail}
                     width={50} height={50}
                     alt={card.thumbnail}
                     className='lg:w-32 md:w-20 w-16' />
                 <div className='lg:mx-5'>
                  <h1 className='text-start text-xl md:text-2xl font-bold'> {card.title}
                  </h1>
                 <p className='font-semibold text-start text-white-100 mt-3'>{card.desc}</p>
                </div>     
              </div>
           </Button>      
          ))}    
       </div>
    </div>
  )
}

export default Experience
