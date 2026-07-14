import React from 'react'
import { Button } from '../../components/ui/button';
import { ArrowRight, MoveRight } from 'lucide-react';
import LeftBanner from '../left-banner';
import Hero from './hero';
import SearchVendors from './search-vendors';
import SignupOptions from './signup-options';
import Benefits from './benefits';
import HowItWorks from './how-it-works';
import Features from './features';
import RtzMobile from './rtz-mobile';

const Home = () => {

    const goToLogin = () => {
        window.location.href = "/login"
    }

    return (
        <div className='grid gap-4'>
            <Hero />
            <div className='grid gap-4 md:flex md:items-start md:justify-between my-4 p-4 md:p-6'>
                <div className='w-full md:w-[48%]'>
                    <SearchVendors />
                </div>
                <div className='w-full md:w-[48%]'>
                    <SignupOptions />
                </div>
            </div>
            <Features />
            <HowItWorks />
            <RtzMobile />
            <div className="hidden w-full h-24 m-0 bg-[url('/assets/hero.png')] bg-cover">
                <div className="h-full w-full bg-background/90" />
            </div>
        </div>
    );
}

export default Home