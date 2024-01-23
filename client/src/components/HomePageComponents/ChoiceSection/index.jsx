import React from 'react'

const ChoiceSection = () => {
  return (
    <section className=' section py-24 space-y-24'>

        <div  className=' md:flex-row flex-col gap-10 flex  items-center '>
            <div className=' w-full md:w-1/2 space-y-12 max-w-[500px] mx-auto'>
                <h2 className=' font-bold  text-5xl'>Watch of Choice</h2>
                <p className=' text-gray-500'>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>

                <button className=' btn'>show Watches</button>
            </div>

            <div className=' w-full md:w-1/2'>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png" className=' w-full' alt="" />
            </div>
        </div>


        <div  className='  md:flex-row flex-col gap-10 flex  items-center '>

        <div className=' w-full md:w-1/2'>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png" className=' w-full' alt="" />
            </div>

            
            <div className=' w-full md:w-1/2 space-y-12 max-w-[500px] mx-auto'>
                <h2 className=' font-bold  text-5xl'>Watch of Choice</h2>
                <p className=' text-gray-500'>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>

                <button className=' btn'>show Watches</button>
            </div>

           
        </div>

    </section>
  )
}

export default ChoiceSection