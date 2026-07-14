import React from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Search } from 'lucide-react'

const SearchVendors = () => {

    const goToTradeZone = () => {
        window.location.href = "/trade-zone"
    }

    return (
        <div className='w-full grid gap-6 p-2 md:p-4'>
            <h1 className='text-4xl md:text-6xl font-extralight capitalize'>
                the trade zone
            </h1>
            <div className='w-full grid gap-4'>
                <span className='text-xl font-extralight'>Recycle Trade Zone (RTZ) provides you with the ease of access to a pool of Vendors, Buyers and Recyclers to make trading your recyclables a memorable experience.</span>
                <span className='text-xl font-extralight'>To access this pool, navigate to <strong>The Trade Zone</strong> and view all the available members of the pool. You can also narrow down your search by using the filters including location and member type.</span>
                <span className='text-xl font-extralight'>To make it more exciting, you can choose to view the members in a List view which shows you the detail of each member or Map view which shows the actual location of each member on Google map.</span>
            </div>
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            <span className='text-xl font-extralight'>Click the button below to view the pool.</span>
            <div className='w-full flex items-start'>
                <Button 
                    variant="outline"
                    className="w-full md:max-w-max p-8 flex items-center justify-center rounded-xl border-2 border-brand mt-2 shadow-md dark:shadow-gray-800 cursor-pointer bg-gradient-to-br from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800"
                    onClick={goToTradeZone}
                >
                    <span className='text-2xl'>Let's Go...</span>
                </Button>
                <img src='/assets/bg-overlay.png' className='hidden opacity-30' />
            </div>
        </div>
    )
}

export default SearchVendors