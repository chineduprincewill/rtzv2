import React from 'react'
import { Button } from '../../components/ui/button'

const SignupOptions = () => {

    const goToLogin = () => {
        window.location.href = "/signup"
    }

    return (
        <div className='w-full grid gap-0 p-2 md:px-6 md:py-4 border-l border-muted-foreground/20'>
            <h1 className='text-4xl md:text-6xl font-extralight capitalize mb-4'>
                join community
            </h1>
            <div className='w-full grid gap-2 md:gap-3 text-xl font-extralight'>
                <span className='pb-4 pt-2 rounded-xl'>Sign up and become a <strong className='text-accent'>Vendor</strong> to trade your recyclabels on our platform which provides you with high visibility and ease of access to potential buyers </span>
                <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                <span className='py-4 rounded-xl'>Sign up and become a <strong className='text-green-600'>Buyer</strong> making you visible to vendors who has recyclables to trade, one of the firsts to receive notification on their availability, manage your trades and get better offers on recyclers end products</span>
                <div className="h-px bg-gradient-to-r from-transparent via-brand to-transparent"></div>
                <span className='py-4 rounded-xl '>Sign up and become a <strong className='text-brand'>Recycler</strong> to showcase your service on our platform giving you visibility to our numerous vendors who will require your service</span>
                <Button 
                    variant="outline"
                    className="w-1/3 p-8 flex items-center justify-center rounded-xl border-2 border-accent mb-2 shadow-md dark:shadow-gray-800 cursor-pointer bg-gradient-to-br from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800"
                    onClick={goToLogin}
                >
                    <span className='text-2xl capitalize'>Join us</span>
                </Button>
            </div>
        </div>
    )
}

export default SignupOptions