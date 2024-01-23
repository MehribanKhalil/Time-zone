import React from 'react'
import './index.scss'


const HeroSection = () => {
  return (
    <section className='section hero-section  flex flex-col md:flex-row gap-6  text-center md:text-start py-16'>
        <div className=' max-w-[800px] mx-auto space-y-6' >
            <h1 className=' font-semibold text-[#0B1C39]'>Select Your New Perfect Style</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, cupiditate.</p>

            <button className=' text-white uppercase  bg-[#4A4A4B] px-5 py-2'>Shop now</button>
        </div>

        <div>
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" />
        </div>
    </section>
  )
}

export default HeroSection