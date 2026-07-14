import React from 'react'

const RtzSignature = () => {
    return (
        <div className='w-full flex items-start gap-2 mt-6'> 
            <img src='/assets/logo.png' className="hidden md:block" alt='banner' width="80px" />
            <img src='/assets/logo.png' className="block md:hidden" alt='banner' width="50px" />
            <div className='grid gap-1'>
                <span className='hidden md:block text-2xl font-extralight'>Recycle <br/>Trade Zone</span>
                <span className='hidden md:block uppercase text-[8px] font-semibold'>protecting our shared future</span>
            </div>
        </div>
    )
}

export default RtzSignature