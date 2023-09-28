'use client'
import Image from 'next/image'
import icon1 from './assets/Group8597.png'
import icon2 from './assets/Ellipse4.png'
// import icon8 from './assets/Profile.png'
import icon3 from './assets/Group22.png'
import icon4 from './assets/Group1.png'
import icon5 from './assets/Group5.png'
import drain from './assets/Grains.png'
// import icon6 from './assets/AI Tools Website Assets/Ellipse 91-2.png'
// import icon7 from './assets/AI Tools Website Assets/Ellipse 91-2.png'
import { useEffect } from 'react';
import iss from "./assets/glbss.png"
import abouts from "./assets/Group7.png"
import FallingStars from './components/FallingStar'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import initIconRotation from '../../public/rotateIcons'
export default function Home() {
  useEffect(() => {
    // initIconRotation(); // Call the script when the component mounts
  }, []);
  return (
    <main className=" h-[480px] lg:h-[460px]  xl:h-[50%]  overflow-hidden mt-16 relative" >
      <div className=''>
        <FallingStars />
      </div>

      <h1 className='text-center  xl:pt-10 xl:mt-32 text-[gray] text-3xl xl:text-6xl xl:pb-10'>Empowering</h1>
      <p className='text-center text-3xl xl:text-6xl xl:pb-10'>Everything,Everyone with AI</p>
      <button className='flex outline-none mx-auto border border-[gray] rounded-md bg-[#302e2e] mt-3 p-2 xl:p-6 xl:text-4xl'>Get Early Access</button>
      {/* <Carousel /> */}
      
      <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop>
        <div class=" mt-24 flex    xl:mt-64 flex-col justify-center items-center relative h-[500px] ">
          <div class="mt-4 flex absolute inset-0 justify-around items-center rounded-full icon-container">

            <div class="w-32 h-32 xl:w-56 xl:h-56 rounded-full absolute top-[-12%] xl:right-[34%] :md:right-[30%] lg:right-[30%] transform -translate-x-1/2">
              <Image src={icon1} alt='' />

            </div>

            <div class="w-56 h-56 rounded-full absolute top-[-16%] left-1/2 transform -translate-x-1/2 icon-item">
              <Image
                src={abouts}
                alt="Image"
                className="rounded-full -mt-4 "

              />
            </div>



            <div class="w-16 h-16  rounded-full absolute top-[4%] left-[30%] xl:left-[35%] icon-item">
              <Image src={icon2} className='' />
            </div>


            <div class="w-20 h-20 rounded-full absolute top-[4%] right-[30%] xl:right-[35%] icon-item">
              <Image src={icon3} className='' />
            </div>


            <div class="w-16 h-16 rounded-full absolute top-[18%] right-[21%] xl:top-[38%] xl:right-[20%] icon-item">
              <Image src={icon4} className='' />
            </div>
            <div class="w-16 h-16  rounded-full absolute top-[18%] left-[21%] xl:top-[38%] xl:left-[20%] icon-item">
              <Image src={icon5} className='' />
            </div>
            <div class="w-16 h-16  rounded-full absolute top-[35%] left-[14%] xl:top-[86%] xl:left-[10%] icon-item">
              <Image src={icon2} className='' />
            </div>
            <div class="w-16 h-16  rounded-full absolute top-[35%] right-[14%] xl:top-[86%] xl:right-[10%] icon-item">
              <Image src={icon2} className='' />
            </div>
          </div>


          <div class="mt-32 w-1/2  h-1/2 md:h-3/4 lg:h-5/6 md:w-3/4 lg:w-5/6 xl:h-[84%] xl:w-[100%]">

            <Image src={iss} alt="Globe" className="w-full object-cover h-[600px] xl:h-[1260px]  rounded-t-full" />
          </div>

        </div>
        {/* <div className='-mt-40 border-none '>
          <Image src={drain} alt='' />
        </div> */}
      </Carousel>

    </main>
  )
}
