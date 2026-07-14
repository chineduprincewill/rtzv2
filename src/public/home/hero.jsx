import React from 'react'
import { Button } from '../../components/ui/button';
import { ArrowRight, ArrowRightCircle, MoveRight } from 'lucide-react';
import LeftBanner from '../left-banner';

const Hero = () => {

    const goToLogin = () => {
        window.location.href = "/login"
    }

    return (
        <div className="flex items-center justify-center bg-background min-h-svh m-0 bg-[url('/assets/hero.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-background/90" />
            <div className="w-full z-30 grid grid-cols-1 lg:grid-cols-2 md:py-12">
                {/* Left Banner */}
                <LeftBanner />

                {/* Right Form */}
                <div className="flex flex-col gap-4 items-center justify-center p-6 sm:p-8 lg:p-12">
                    <div className='w-full flex justify-end'>
                        <Button 
                            variant="outline"
                            className="max-w-max p-8 flex items-center justify-between rounded-xl border-2 border-brand mb-2 shadow-md dark:shadow-gray-800 cursor-pointer bg-gradient-to-br from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800"
                            onClick={goToLogin}
                        >
                            <span className='text-xl'>Manage Your Recyclabes</span>
                            <ArrowRightCircle className='!h-5 !w-5 mt-1 animate-ping' />
                        </Button>
                    </div>
                    <img src='/assets/hero-img.png' className='rounded-2xl' />
                </div>
            </div>
        </div>
    );
}

export default Hero