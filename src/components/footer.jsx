import React from 'react'
import { Button } from './ui/button'
import { MailIcon, PhoneIcon } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const Footer = () => {

    const path = window.location.pathname;
    const goToLogin = () => {
        window.location.href = "/signup"
    }

    return (
        <div className='w-full grid'>
        {
            path === '/' &&
            <div className='relative grid md:grid-cols-3 gap-4 px-4 py-8 text-muted-foreground font-extralight'>
                <div className='p-2 z-30 text-lg'>
                    <span className='text-xl md:text-3xl pb-1 border-b border-muted-foreground'>About Us</span>
                    <div className='w-full flex items-start gap-2 mt-6'> 
                        <img src='/assets/logo.png' alt='banner' width="80px" />
                        <div className='grid gap-0'>
                            <span className='text-2xl font-extralight'>Recycle <br/>Trade Zone</span>
                            <span className='uppercase text-[8px] font-semibold'>protecting our shared future</span>
                        </div>
                    </div>
                    <p>
                    A digital solution connecting Vendors to Buyers in trading recyclables and finally to Recyclers for the purpose of recycling them into usable end products.
                    </p>
                </div>
                <div className='p-2 z-30 text-lg '>
                    <span className='text-xl md:text-3xl pb-1 border-b border-muted-foreground'>Features</span>
                    <p className='mt-6'>Some outstanding features of Recycle Trade Zone include</p>
                    <ul className="space-y-2 font-extralight text-lg mt-1">
                        <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                        Location-Based Discovery
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                        Secure Transactions
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                        Real-Time Listings
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                        Environmental Impact
                        </li>
                    </ul>
                </div>
                <div className='p-2 z-30 text-lg'>
                    <span className='text-xl md:text-3xl pb-1 border-b border-muted-foreground'>Our community</span>
                    <p className='mt-6'>Join our community of Eco-friendly enthusiasts by clicking below </p>
                    <div className='grid gap-1 mt-3'>
                        <Button 
                            variant="outline"
                            className="w-1/2 p-4 flex items-center justify-center rounded-xl border-2 border-accent mb-2 shadow-md dark:shadow-gray-800 cursor-pointer bg-gradient-to-br from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800"
                            onClick={goToLogin}
                        >
                            <span className='text-lg capitalize text-white'>Join us</span>
                        </Button>
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-extralight text-muted-foreground">Or Contact Us @</span>
                            <div className="flex-1 h-px bg-border"></div>
                        </div>
                        <div className='grid gap-0'>
                            <div className='flex gap-2 items-center font-extralight'>
                                <PhoneIcon size={14} />
                                <span>+2348064481852</span>
                            </div>
                            <div className='flex gap-2 items-center font-extralight'>
                                <MailIcon size={14} />
                                <span>info@recycletradezone.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
            <div className='w-full flex items-center justify-center mx-auto py-6'>
                <span>&copy; Ecogreen Africa | 2026</span>
            </div>
        </div>
    )
}

export default Footer