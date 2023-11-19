import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function Home() {
  return (  
   <main className='px-[16px] 2xl:px-[360px] max-w-[2560px]'>
    {/* NAVBAR */}
    <section className='mt-[20px]'>
    <Navbar />
    </section>
    {/* HERO SECTION */}
    <section className='my-[32px] max-h-[721px] border'>
      <Hero />
    </section>
   </main>
  )
}