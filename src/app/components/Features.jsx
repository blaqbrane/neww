import React from 'react'
import Image from 'next/image'
import bg from '../assets/Grains.png'
const Features = () => {
  return (
    <section className='text-white -mt-[1px] z-20' >
        <div className='flex h-10 relative place-items-center before:h-[250px] before:w-[3500ch] before:-translate-x-[5%] before:bg-gradient-radial before:from-[#3b3a3a] before:to-[#2c2a2a] before:opacity-100 before:blur-2xl after:w-[3000ch] after:h-[250px] after:-translate-x-[5%] after:bg-gradient-radial after:from-[#3b3a3a]  after:to-[#2c2a2a] after:opacity-100 after:blur-2xl '>
           

            <div className='absolute top-0 w-full left-0 flex justify-center items-center mt-4'>
                <h1 className='text-center z-40'>Evolve in this world</h1>
            </div>
        </div>
    </section>
  )
}

export default Features