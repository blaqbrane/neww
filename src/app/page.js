'use client'
import Image from 'next/image'
import icon1 from './assets/AI Tools Website Assets/Group 1000008597.png'
import icon2 from './assets/AI Tools Website Assets/Ellipse 91-4.png'
import icon3 from './assets/AI Tools Website Assets/Ellipse 91-2.png'
import icon4 from './assets/AI Tools Website Assets/Ellipse 91-1.png'
import icon5 from './assets/AI Tools Website Assets/Group 1000008555.png'
import drain from './assets/AI Tools Website Assets/Grains.png'
// import icon6 from './assets/AI Tools Website Assets/Ellipse 91-2.png'
// import icon7 from './assets/AI Tools Website Assets/Ellipse 91-2.png'
import { useEffect } from 'react';
import iss from "./assets/globe2.jpeg"
import abouts from "./assets/AI Tools Website Assets/Group 1000008557.png"
import FallingStars from './components/FallingStar'


export default function Home() {

  return (
    <main className="max-w-[1240] max-h-[800px] overflow-hidden mt-16 relative" >
      <div className=''>
        <FallingStars />
      </div>
      <h1 className='text-center text-[gray] text-3xl'>Empowering</h1>
      <p className='text-center text-3xl'>Everything,Everyone with AI</p>
      <button className='flex mx-auto border border-[gray] rounded-md bg-[#302e2e] mt-3 p-2'>Get Early Access</button>
      {/* <Carousel /> */}

      <div className='relative  h-[300px] flex justify-center py-10 mt-52'>
        <div className='relative'>
          <Image
            src={iss}
            alt="Image"
            className="md:rounded-t-full rounded-full  mt-6 md:mt-0 w-[150px] h-[150px] md:w-[600px] md:h-[600px] md:overflow-hidden"

          />
          <div className='absolute w-[1000px] h-[600px] md:rounded-t-full rounded-full top-0 left-0 bg-blue-800/10' />


        </div>

        <div className='absolute bottom-60 z-10 w-52 h-52'>
          <Image
            src={abouts}
            alt="Image"
            className="rounded-full "

          />
          <Image src={icon1} className='absolute top-[10px] left-[140px]' />
        </div>
        <div className='absolute bottom-25 z-10 left-6 md:left-[250px] w-40 h-40'>
          <Image src={icon2} className='' />
        </div>
        <div className='absolute bottom-25 -right-5 md:right-[200px] z-10 w-40 h-40'>
          <Image src={icon4} className='' />
        </div>
        <div className='absolute bottom-[-100px] right-[80px] z-10 w-40 h-40'>
          <Image src={icon5} className='' />
        </div>
        <div className='absolute bottom-[-100px] left-[100px] z-10 w-40 h-40'>
          <Image src={icon3} className='' />
        </div>
        <div>
          <Image src='' alt='' />
        </div>
        {/* <div className='absolute bottom-[-200px] left-[180px] z-10 w-40 h-40'>
          
        </div>
         */}

      </div>

      {/* <div className='absolute left-0 -top-40 w-full'>
        <Image src={drain} className='' />
      </div> */}
    </main>
  )
}
