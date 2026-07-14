import React from 'react'
import CountdownComponent from './countdown-component'

const RtzMobile = () => {
    return (
        <div className='relative w-full md:max-h-[460px] overflow-hidden bg-[url("/assets/hero.png")] bg-cover'>
            <div className='w-full h-full py-4 md:py-8 bg-black/70'>
                <div className='w-full md:w-2/3 h-full mx-auto grid gap-2 p-4 md:p-0 md:flex md:justify-between md:items-start'>
                    <div className='w-full grid gap-0 my-auto'>
                        <span className='text-4xl h-12 block text-transparent bg-clip-text bg-gradient-to-r from-brand via-accent to-accent font-bold'>What's next ?</span>
                        <span className='text-6xl md:text-8xl capitalize text-white mb-4'>RTZ mobile <br/>loading...</span>       
                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                        <CountdownComponent />
                    </div>
                    <img src='/assets/rtzapp.png' alt='app mobile' width='350px' className='hidden md:block' />
                </div>
            </div>
        </div>
    )
}

export default RtzMobile