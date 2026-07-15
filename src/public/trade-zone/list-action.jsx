import { Award, TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'

const ListAction = ({ filterMembers }) => {

  return (
    filterMembers.map((member, index) => (
        <div key={index} className='grid gap-2 md:flex md:justify-between md:items-center w-full p-4 rounded-r-2xl border border-muted-foreground/10 hover:bg-muted-foreground/10 cursor-pointer'>
            <div className='max-w-max grid gap-1'>
                {
                    member?.action === "selling" ?
                    <div className='flex items-end gap-1 text-sm text-green-600 mb-[-9px]'>
                        <TrendingUp className='h-5 w-5' />
                        <span>Selling</span>
                    </div> : 
                    <div className='flex items-end gap-1 text-sm text-red-600 mb-[-9px]'>
                        <TrendingDown className='h-5 w-5 scale-x-[-1]' />
                        <span>Buying</span>
                    </div>
                }
                <div className='flex items-center gap-2'>                            
                    <span className='text-lg md:text-3xl font-extralight'>{member?.name}</span>
                    {
                        member?.is_verified && 
                        <div className='p-1 rounded-full shadow-md bg-accent'>
                            <Award className='w-4 h-4 text-white' />
                        </div>
                    }
                </div>
                <span className='md:text-lg'>{member?.address}, {member?.city}, {member?.state}</span>
                <span className='capitalize text-xs md:text-sm'>{member?.user_type.length > 0 && member?.user_type.join(', ')}</span>
            </div>
            <span className='text-3xl md:text-4xl'>{member?.quantity_kg !== null ? member?.quantity_kg : 0}<span className='ml-1 text-sm'>kg</span></span>
        </div>
    )))    
}

export default ListAction