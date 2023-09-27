'use client'
import Image from 'next/image'
import icon1 from './assets/Group8597.png'
import icon2 from './assets/Ellipse4.png'
import icon3 from './assets/Ellipse2.png'
import icon4 from './assets/Ellipse1.png'
import icon5 from './assets/Group5.png'
import drain from './assets/AI Tools Website Assets/Grains.png'
// import icon6 from './assets/AI Tools Website Assets/Ellipse 91-2.png'
// import icon7 from './assets/AI Tools Website Assets/Ellipse 91-2.png'
import { useEffect } from 'react';
import iss from "./assets/globe2.jpeg"
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
    <main className="md:max-w-[1240] h-[460px] overflow-hidden mt-16 relative" >
      <div className=''>
        <FallingStars />
      </div>

      <h1 className='text-center text-[gray] text-3xl'>Empowering</h1>
      <p className='text-center text-3xl'>Everything,Everyone with AI</p>
      <button className='flex mx-auto border border-[gray] rounded-md bg-[#302e2e] mt-3 p-2'>Get Early Access</button>
      {/* <Carousel /> */}
      <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop>
        <div class=" mt-24 flex flex-col justify-center items-center relative h-[500px] ">
          <div class="mt-4 flex absolute inset-0 justify-around items-center rounded-full icon-container">

            <div class="w-32 h-32 rounded-full absolute top-[-10%] md:right-[30%] lg:right-[30%] transform -translate-x-1/2">
              <Image src={icon1} alt='' />

            </div>

            <div class="w-56 h-56 rounded-full absolute top-[-16%] left-1/2 transform -translate-x-1/2 icon-item">
              <Image
                src={abouts}
                alt="Image"
                className="rounded-full -mt-4 "

              />
            </div>



            <div class="w-16 h-16  rounded-full absolute top-[4%] left-[30%] icon-item">
              <Image src={icon2} className='' />
            </div>


            <div class="w-16 h-16 rounded-full absolute top-[4%] right-[30%] icon-item">
              <Image src={icon3} className='' />
            </div>


            <div class="w-16 h-16 rounded-full absolute top-[18%] right-[21%] icon-item">
              <Image src={icon4} className='' />
            </div>
            <div class="w-16 h-16  rounded-full absolute top-[18%] left-[21%] icon-item">
              <Image src={icon5} className='' />
            </div>
            <div class="w-16 h-16  rounded-full absolute top-[35%] left-[14%] icon-item">
              <Image src={icon4} className='' />
            </div>
            <div class="w-16 h-16  rounded-full absolute top-[35%] right-[14%] icon-item">
              <Image src={icon2} className='' />
            </div>
          </div>


          <div class="mt-20 w-1/2 h-1/2 md:h-3/4 lg:h-5/6 md:w-3/4 lg:w-5/6 xl:h-[83%] xl:w-[83%]">

            <Image src={iss} alt="Globe" className="w-full h-[600px] rounded-t-full" />
          </div>



        </div>
      </Carousel>
      {/* <div className='relative  h-[300px] flex justify-center py-10 mt-52'>
        <div className='relative '>
          <Image
            src={iss}
            alt="Image"
            className="md:rounded-t-full rounded-full  mt-6 md:mt-0 w-[150px] h-[150px] md:w-[1200px] md:h-[1200px] md:overflow-hidden"

          />
         

          <div className='absolute top-0 left-96 z-10 w-52 h-52'>
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

        </div> */}


      {/* <div className='absolute bottom-[-200px] left-[180px] z-10 w-40 h-40'>
          
        </div>
         */}

      {/* </div> */}

      {/* <div className='absolute left-0 -top-40 w-full'>
        <Image src={drain} className='' />
      </div> */}
    </main>
  )
}
