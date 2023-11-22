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
      <LeftTextRightImage />
    </section>

    {/* REVIEW CARD PRODUCT SLIDER */}
    <section className='mt-[100px] flex items-center justify-center'>
      <div className="grid gird-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-[8px] py-2 px-4 lg:px-0 gap-y-[16px] lg:gap-x-[64px] lg:gap-y-[32px]">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    </div>
    </section>




    
    </section>
    
   </main>
  )
}