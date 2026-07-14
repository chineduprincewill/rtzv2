import { BadgeDollarSignIcon, Globe, Link } from 'lucide-react'
import React from 'react'

const Benefits = () => {
    return (
        <div className="w-full bg-gray-100 dark:bg-[#00231a] py-4 md:py-8">
            <div className='grid gap-4 p-4 md:p-6'>
                <h1 className='text-4xl md:text-6xl font-extralight capitalize md:mx-auto'>
                    What you get
                </h1>
                <div className='w-full grid md:flex md:items-start md:justify-between my-6'>
                    <div className='bg-background p-4 rounded-xl w-full md:w-[32%] shadow-xl dark:shadow-green-950'>
                        <h1 className='flex gap-2 items-center text-lg font-semibold py-2 border-b border-muted-foreground/10 uppercase'>
                            <Globe className='!w-5 !h-5 text-muted-foreground' />
                            <span className='text-muted-foreground'>Global visibility</span>
                        </h1>
                        <div className='w-full my-2 font-extralight text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo libero excepturi iste molestias eaque vero eveniet, ullam perferendis ad amet atque animi adipisci doloribus aliquam ipsam ea praesentium ut.
                        </div>
                    </div>
                    <div className='bg-background p-4 rounded-xl w-full md:w-[32%] shadow-xl dark:shadow-green-950'>
                        <h1 className='flex gap-2 items-center text-lg font-semibold py-2 border-b border-muted-foreground/10 uppercase'>
                            <Link className='!w-5 !h-5 text-muted-foreground' />
                            <span className='text-muted-foreground'>Ease of target linkage</span>
                        </h1>
                        <div className='w-full my-2 font-extralight text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo libero excepturi iste molestias eaque vero eveniet, ullam perferendis ad amet atque animi adipisci doloribus aliquam ipsam ea praesentium ut.
                        </div>
                    </div>
                    <div className='bg-background p-4 rounded-xl w-full md:w-[32%] shadow-xl dark:shadow-green-950'>
                        <h1 className='flex gap-2 items-center text-lg font-semibold py-2 border-b border-muted-foreground/10 uppercase'>
                            <BadgeDollarSignIcon className='!w-5 !h-5 text-muted-foreground' />
                            <span className='text-muted-foreground'>Seamless sales</span>
                        </h1>
                        <div className='w-full my-2 font-extralight text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo libero excepturi iste molestias eaque vero eveniet, ullam perferendis ad amet atque animi adipisci doloribus aliquam ipsam ea praesentium ut.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits