import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ReviewCardSlider from './components/ReviewCardSlider'

export default function Home() {
  return (  
   <main className=''>
    {/* BG CIRCLE IMAGE */}
    {/* <div className="circle absolute bottom-[350px] lg:bottom-[100px] left-[50%] translate-x-[-50%] overflow-hidden z-[1]"></div> */}
    {/* Z-CONTAINER 2 */}
    <section className='z-[24] relative'>
    {/* NAVBAR */}
    <section className='mt-[20px] px-[16px] 2xl:px-[340px]'>
    <Navbar />
    </section>
    {/* HERO SECTION */}
    <section className='mt-[100px] px-[16px] 2xl:px-[340px]'>
      <HeroSection />
    </section>
    {/* REVIEW CARD PRODUCT SLIDER */}
    <section className='mt-[100px]'>
      
    </section>
    </section>
    
   </main>
  )
}