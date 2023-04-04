import React from 'react'
import BenefitsList from './BenefitsList'
function BenefitsBox() {
  return (
    <div className='flex justify-center'>
        <div className='text-lg bg-green-900 text-white font-bold w-96 rounded'>
            <div className='text-center'>
                Benefits of Coding Society
                <hr/>
            </div>
            <BenefitsList/>
        </div>
    </div>
  )
}

export default BenefitsBox