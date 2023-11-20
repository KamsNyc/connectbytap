import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadge from './components/TrustBadge'
import Model000 from './components/Model000'

export default function Home() {
  return (  
   <main className='px-[16px] 2xl:px-[360px] max-w-[2560px]'>
    {/* NAVBAR */}
    <section className='mt-[20px]'>
    <Navbar />
    </section>
    {/* HERO SECTION */}
    <section className='my-[32px] h-full'>
      <Hero />
    </section>

    <section className='py-[60px]'>
      <TrustBadge />
    </section>

    <section className='py-[80px]'>
      <Model000 />
    </section>
   </main>
  )
}