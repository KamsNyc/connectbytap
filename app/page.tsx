import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (  
   <main className='px-[16px] 2xl:px-[360px]'>
    {/* BG CIRCLE IMAGE */}
    <div className="circle absolute bottom-[350px] lg:bottom-[100px] left-[50%] translate-x-[-50%] overflow-hidden z-[1]"></div>
    {/* Z-CONTAINER 2 */}
    <section className='z-[24] relative'>
    {/* NAVBAR */}
    <section className='mt-[20px]'>
    <Navbar />
    </section>
    {/* HERO SECTION */}
    <section className='mt-[100px]'>
      <HeroSection />
    </section>
    {/* REVIEW CARD SLIDER */}
    <section className='mt-[100px]'>

    </section>
    </section>
    
   </main>
  )
}