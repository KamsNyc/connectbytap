import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ReviewCardSlider from './components/ReviewCardSlider'
import ProductCard from './components/ProductCard'
import GetReviewsOn from './components/GetReviewsOn'
import LeftTextRightImage from './components/LeftTextRightImage'

export default function Home() {
  
  return (  
   <main className=''>

    {/* BG CIRCLE IMAGE */}
    {/* <div className="circle absolute bottom-[165px] left-[50%] translate-x-[-50%] overflow-hidden z-[1]"></div> */}

    {/* Z-CONTAINER 2 */}
    <section className='z-[24] relative'>
    {/* NAVBAR */}
    <section className='mt-[20px] px-[16px] lg:px-[165px] 2xl:px-[340px]'>
    <Navbar />
    </section>

    {/* HERO SECTION */}
    <section className='mt-[100px] px-[16px] lg:px-[165px] 2xl:px-[340px]'>
      <HeroSection />
    </section>

      {/* GET REVIEW ON SECTION */}
    <section className='px-[16px] xl:px-[135px]'>
      <GetReviewsOn />
    </section>

    {/* REVIEW MOCKUP */}
    {/* CONTAINER */}
    <section className=' mt-[100px] px-[16px] xl:px-[135px] 2xl:px-[305px]'>
      {/* HEADING BADGE */}
      <div className="flex items-center justify-center">
    <div
      className="w-auto h-[32px] bg-[#E1EBFF] rounded-[100px] flex items-center justify-between"
    >
      {/* ONETAP BUTTON */}
      <div className="bg-[#0E60FF] rounded-[32px]">
        <h1 className="text-white font-medium px-[16px] py-[3px]">How it Works</h1>
      </div>
      {/* SECONDARY TEXT */}
      <div className="flex items-center justify-center pr-[9px] py-[5px]">
        <p className='px-[10px] text-[14px]'>Supercharge Your Reviews</p>
      </div>
    </div>
    </div>
      <LeftTextRightImage />
    </section>

    {/* REVIEW CARD PRODUCT SLIDER */}
    <section className='mt-[100px] flex items-center justify-center'>
      <div className="">
    <ProductCard />
    </div>
    </section>




    
    </section>
    
   </main>
  )
}