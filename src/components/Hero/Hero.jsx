import React from 'react'
import BenefitsBox from '../BenefitsBox/BenefitsBox'
function Hero() {
  return (
    <div className=' bg-[url("../imgs/rambassadors-header.png")] flex justify-center bg-auto items-end h-96 bg-no-repeat bg-center shadow-inner'>
        <div className='flex-col align-bottom'>
            <div className='text-white font-bold text-3xl'>
                Support your technological interests.<br/>
                Expand your computer knowledge.<br/>
                Explore and Innovate.<br/>
                Share Ideas.
            </div>
            <div className='flex justify-center'>
                <button class="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Get Involved!
                </button>
            </div>
        </div>
        {/* <BenefitsBox/> */}
    </div>
  )
}

export default Hero