
// import { Carousel } from 'react-responsive-carousel'
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
export default function Home() {
 
  return (
    <main>
      <Hero/>
      <div>
        <Features/>
      </div>
      <div>
        <Testimonials/>
      </div>
    </main>
    
  )
}
