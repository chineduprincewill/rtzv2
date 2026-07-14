import React from 'react'
import { Badge } from '../components/ui/badge'
import { useLocation } from 'react-router-dom'
import { Button } from '../components/ui/button';

const LeftBanner = () => {

    const loc = useLocation();

    const goToTradeZone = () => {
        window.location.href = "/trade-zone"
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="grid gap-4 px-4 py-4 md:pl-12">
                <div className='w-full grid md:flex md:items-center gap-2'> 
                    <img src='/assets/logo.png' className='hidden md:block' alt='banner' width="90px" />
                    <img src='/assets/logo.png' className='block md:hidden' alt='banner' width="80px" />
                    <div className='grid gap-2'>
                        <span className='hidden md:block text-3xl font-extralight'>Recycle<br/>Trade Zone</span>
                        <span className='block md:hidden text-3xl font-extralight'>Recycle Trade Zone</span>
                        <span className='uppercase text-xs font-light'>protecting our shared future</span>
                    </div>
                </div>
                <h1 className="font-extralight leading-tight md:text-xl">
                    <span className="text-2xl md:text-5xl lg:text-7xl gradient-title">Recyclable Wastes Tracking, Easy & Automated</span>
                </h1>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                {
                    loc.pathname !== '/' ?
                    <p className="text-muted-foreground text-lg md:text-xl font-extralight">
                    Smart solution seamlessly monitoring your recyclables from bin to processing, using real-time data to streamline operations and maximize efficiency by automating the tedious tracking process.
                    </p>
                    :
                    <p className="text-muted-foreground font-extralight md:text-3xl">
                    Save valuable time, gain clear insights into your waste stream and make sustainability both effortless and highly effective.
                    </p>
                }
                {
                    loc.pathname !== '/' &&
                    <Button 
                        variant="outline"
                        className="w-full md:max-w-max p-6 flex items-center justify-center rounded-xl border-2 border-accent mt-2 shadow-md dark:shadow-gray-800 cursor-pointer bg-gradient-to-br from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800"
                        onClick={goToTradeZone}
                    >
                        <span className='text-xl'>Go to Trade Zone</span>
                    </Button>
                }
            </div>
        </div>
    )
}

export default LeftBanner